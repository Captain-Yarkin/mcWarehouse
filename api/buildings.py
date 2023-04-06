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

        # Retrieve buildings data
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT id, name, image_url FROM buildings")
        buildings = cursor.fetchall()

        # Send buildings data as JSON
        print(json.dumps(buildings))

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection closed")
