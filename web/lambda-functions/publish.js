exports.handler = async function(event, context) {
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '85cmsqr4',
  dataset: 'production',
  // Need a write token in order to read schedule metadata and publish documents
  token: 'skxH8Z1wYPrlRuRZAlFTb2Pm0DN7d2XxY2K43eK0EmMQyPTd8ZTrbW0WJ5YXrgv0v6y68ej6kTCDuglfplGxFKaCGMPEOn2Wc0SAGX2XoApKBYYQtTl2scVXSzEMyoyJvjL9zwB6UvBOhUBCOjwRCzfMr5nU6yNbctEy7FfUaqhudd8FmWlq',
  useCdn: false,
})

// Query for any scheduled publish events that should occur
const query = `* [_type == "schedule.metadata" && !(_id in path("drafts.**")) && datetime <= now()]`

const publish = async (metadata, client) => {
  const dataset = client.config().dataset
  const id = metadata.documentId
  const rev = metadata.rev

  // Fetch the draft revision we should publish from the History API
  const uri = `/data/history/${dataset}/documents/drafts.${id}?revision=${rev}`
  const revision = await client
    .request({ uri })
    .then((response) => response.documents.length && response.documents[0])

    console.log('debug001', revision)
  if (!revision) {
    // Here we have a situation where the scheduled revision does not exist
    // This can happen if the document was deleted via Studio or API without
    // unscheduling it first.
    console.error('Could not find document revision to publish', metadata)
    return
  }

  console.log('debug002')

  // Publish it
  return (
    client
      .transaction()
      // Publishing a document is simply writing it to the dataset without a
      // `drafts.` prefix. The `documentId` field on the metadata already does
      // not include this prefix, but the revision we fetched probably does, so
      // we overwrite it here.
      .createOrReplace(Object.assign({}, revision, { _id: id }))
      // Then we delete any current draft.
      .delete(`drafts.${id}`)
      // And finally we delete the schedule medadata, since we're done with it.
      .delete(metadata._id)
      .commit()
  )
}

client
  .fetch(query)
  .then((response) => Promise.all(response.map((metadata) => publish(metadata, client))))
}