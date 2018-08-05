using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace TodoApi.Models
{
    public class TodoItem
    {

        public TodoItem()
        {
            
        }
        public TodoItem(int id, string name, int status, string description, string assignedTo, long date)
        {
            this.Id = id;
            this.Name = name;
            this.Status = status;
            this.Description = description;
            this.AssignedTo = assignedTo;
            this.Date = date;
        }
        [Key]
        [HiddenInput]public long Id { get; set; }
        public string Name { get; set; }
        public int Status { get; set; }

        public string Description { get; set; }

        public string AssignedTo { get; set; }

        public long Date { get; set; }
    }
}