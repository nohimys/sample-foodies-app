import sql from 'better-sqlite3';

const db = sql('./data/meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug:string) : any{
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}