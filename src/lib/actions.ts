'use server'

import {redirect} from "next/navigation";
import {saveMeal} from "@/lib/meals";

function isInvalidText(text: string) {
    return !text || text.trim() === '';
}

export const shareMeal = async (prevState: any, formData: any) => {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    //This will print on Server Console
    // console.log(meal);

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input.',
        };
    }

    await saveMeal(meal);
    redirect('/meals');
}