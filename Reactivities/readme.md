First you need to install EFCore tool

>dotnet tool install --global dotnet-ef

Then create mingration

```
>dotnet ef migrations add "ActivityEntityAdded" -p .\Persistence\ -s .\API\
```

Drop a database
go to the Reactivities folder
```
>dotnet ef database drop -p .\Persistence\ -s .\API\
```