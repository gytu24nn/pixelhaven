using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class AddDeveloperAndPrizeDataOnGames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 1L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "ConcernedApe", 13.99m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 2L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "Rockstar Games", 59.99m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 3L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "FromSoftware", 59.99m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 4L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "CD Projekt Red", 59.99m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 5L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "Playdead", 9.99m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 6L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "Re-Logic", 9.75m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 7L,
                column: "Developer",
                value: "Respawn Entertainment");

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 8L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "Crystal Dynamics", 14.99m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 9L,
                column: "Developer",
                value: "Maxis");

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 10L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "SCS Software", 19.99m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 11L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "GIANTS Software", 49.99m });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 1L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 2L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 3L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 4L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 5L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 6L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 7L,
                column: "Developer",
                value: "");

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 8L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 9L,
                column: "Developer",
                value: "");

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 10L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });

            migrationBuilder.UpdateData(
                table: "Games",
                keyColumn: "GameId",
                keyValue: 11L,
                columns: new[] { "Developer", "Price" },
                values: new object[] { "", 0m });
        }
    }
}
