require 'sqlite3'

class CacheSqlite

  def initialize(dbFile)
    @db = SQLite3::Database.new(dbFile)
    @db.execute("CREATE TABLE IF NOT EXISTS stops(number int unique, name varchar(128), direction varchar(12));")
  end
  
  def save_stop(data)
    sql = "INSERT INTO stops(number, name, direction) VALUES(?, ?, ?)"
    begin 
      @db.prepare(sql) do |st|
        st.execute(data[:number], data[:name], data[:direction])
      end
    rescue
      nil
    end
  end
  
  def get_stop(number)
    sql = "SELECT * FROM stops WHERE number = #{number}"
    @db.execute(sql)
  end
  
  def stop_is_cached(number)
    sql = "SELECT COUNT(number) FROM stops WHERE number = #{number}"
    result = @db.execute(sql)
    if result.first.first == 1
      return true
    end
    return false
  end
end
