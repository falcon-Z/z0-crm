import { int, serial, varchar } from "drizzle-orm/mysql-core/columns";
import { uniqueIndex } from "drizzle-orm/mysql-core/indexes";
import { mysqlTable } from "drizzle-orm/mysql-core/table";

export const countries = mysqlTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (countries) => ({
    nameIndex: uniqueIndex("name_idx").on(countries.name),
  })
);

export const states = mysqlTable("states", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  country_id: int("country_id").references(() => countries.id),
});

export const cities = mysqlTable("cities", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  state_id: int("state_.d").references(() => states.id),
});
