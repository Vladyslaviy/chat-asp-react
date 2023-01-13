using System;
using Microsoft.AspNetCore.Mvc;
[ApiController]
[Route("controller")]
public class User : ControllerBase
{
    
    public int Idd { get; set; }
	public string Name { get; set; }

    //public User(int id, string name)
    //{
    //    Id = id;
    //    Name = name;
    //}
    private readonly ILogger<User> _logger;
    public User(ILogger<User> logger)
    {
        _logger = logger;
    }
    
    [HttpGet]
    public string Get()
    {
        Idd = 2;
        return ("aaaaaaaaaa");
    }
}
public class userTest
{
    public int Id { get; set; }
}