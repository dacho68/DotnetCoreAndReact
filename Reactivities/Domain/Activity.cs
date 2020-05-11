using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


// ActivityEntityAdded migrations
//dotnet ef migrations add "ActivityEntityAdded" -p .\Persistence\ -s .\API\
namespace Domain
{
    public class Activity
    {
         [Key]
        public Guid Id {get;set;}

        [StringLength(20)]
        public string Title {get;set;}

         [StringLength(64)]
        public string Description {get;set;}
        [StringLength(20)]
        public string Category {get;set;}
        public DateTime Date {get;set;}

        [StringLength(20)]
        public string City {get;set;}
        [StringLength(64)]
        public string Venue {get;set;}
        
    }
}