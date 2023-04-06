import json
import mysql.connector
from mysql.connector import Error

# Connect to the database
try:
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='minecraftWarehouse'
    )

    if connection.is_connected():
        print("Connected to database")

        # Retrieve materials data for a building
        building_id = input("Enter building id: ")
        cursor = connection.cursor(dictionary=True)
        cursor.execute(f"SELECT * FROM materials WHERE building_id = {building_id}")
        materials = cursor.fetchall()

        # Send materials data as JSON
        print(json.dumps(materials))

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection closed")
