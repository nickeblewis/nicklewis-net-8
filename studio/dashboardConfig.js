export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dee19820641228017513b2d',
                  title: 'Sanity Studio',
                  name: 'nicklewis-net-8-studio',
                  apiId: '1192d8b9-0446-4249-8996-a2b626430e0e'
                },
                {
                  buildHookId: '5dee1982310e6ed963e84217',
                  title: 'Blog Website',
                  name: 'nicklewis-net-8',
                  apiId: '0e180aa8-409d-4d7d-975d-bbf2d11e9ff7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/nicklewis-net-8',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nicklewis-net-8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
