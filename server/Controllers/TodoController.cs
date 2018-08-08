using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace TodoApi.Controllers
{
    
    public class TodoController : Controller
    {
        private readonly TodoContext _context;

        public TodoController(TodoContext context)
        {
            _context = context;

            /*if (_context.TodoItems.Count() == 0)
            {
                _context.TodoItems.Add(new TodoItem { Name = "Item1" });
                _context.SaveChanges();
            }*/
        }  
        [Route("api/gettasks")]
        public IEnumerable<TodoItem> GetAll()
        {
            return _context.TodoItems.ToList();
        }

        [Route("api/gettask/{id}")]
        public IActionResult GetById(long id)
        {
            var item = _context.TodoItems.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
            
        [Route("api/todo/create")]
        [HttpPost]
        public ActionResult Create([FromBody] TodoItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.TodoItems.Add(item);
            _context.SaveChanges();
            return new StatusCodeResult(201); //created            
            // return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
            
        }

        [Route("api/updatetask/{id}")]
        public IActionResult Update(long id, [FromBody] TodoItem item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }	

            var todo = _context.TodoItems.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
// Need to make changes here
            // todo.IsComplete = item.IsComplete;
            todo.Name = item.Name;
            todo.Status = item.Status;
            todo.Date = item.Date;
            todo.Description = item.Description;
            todo.AssignedTo = item.AssignedTo;
            _context.TodoItems.Update(todo);
            _context.SaveChanges();
            return new ObjectResult(todo);
        }

        [Route("api/deletetask/{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _context.TodoItems.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todo);
            _context.SaveChanges();
            return new NoContentResult();
        }
    }
}
