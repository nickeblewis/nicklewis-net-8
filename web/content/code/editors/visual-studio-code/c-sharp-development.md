You can work with .NET Core and C# using just Visual Studio Code if you want to. A good starting point is this page:

https://code.visualstudio.com/docs/languages/csharp

I will write up some notes on how I use Visual Studio Code for my day-to-day development work over time. However just as a quick example and test:

Create a new folder somewhere and cd into into it. Then run the following

```$ dotnet new console```

Will create the simplest of console apps which when run displays a string of text via your terminal. In some cases if this is the first time you've run this, the system will also need to install a few prerequisite tools for you and therefore it will take time. Subsequent operations will be much faster.

```$ dotnet run```

Will execute it and you should see "hello world". First run may be slow and this is because the compiler is doing it's work in the background but after that it is far more responsive.

## What next?

- [ ] Oh sod it, just dive in a the deep end of course! We shall build something that runs on Azure, handles databases via entity-framework and the whole kaboodle.