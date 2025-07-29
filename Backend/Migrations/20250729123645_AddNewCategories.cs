using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class AddNewCategories : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "GamesCategories",
                columns: new[] { "GamesCategoryId", "CategoryName" },
                values: new object[,]
                {
                    { 3L, "Indie games" },
                    { 4L, "Simulation" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "GamesCategories",
                keyColumn: "GamesCategoryId",
                keyValue: 3L);

            migrationBuilder.DeleteData(
                table: "GamesCategories",
                keyColumn: "GamesCategoryId",
                keyValue: 4L);
        }
    }
}
