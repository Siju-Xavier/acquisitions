import {pgTable, varchar, serial, timestamp} from "drizzle-orm/pg-core";


export const users = pgTable('users ', {
    id: serial('id').primaryKey(),
    name: varchar('name',{ length: 255}).notNull(),
    email: varchar('email',{ length: 255}).notNull(),
    password: varchar('password',{ length: 255}).notNull(),
    role: varchar('role',{ length: 50}).notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),

});