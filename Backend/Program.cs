using Backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer(); // Lägg till detta för Swagger
builder.Services.AddSwaggerGen();           // Lägg till detta för Swagger

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseMySql(builder.Configuration.GetConnectionString("AppDbContextConnection"),
    ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("AppDbContextConnection")));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder => builder.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();                // Aktivera Swagger UI i utvecklingsläge
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Här lägger du till statiska filer
app.UseStaticFiles();

app.UseCors("AllowFrontend"); // Använd CORS-policy

app.UseAuthorization();

app.MapControllers();

app.Run();
