'use server'

import {redirect} from "next/navigation";
import {saveMeal} from "@/lib/meals";

export const shareMeal = async (formData: any) => {

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

    await saveMeal(meal);
    redirect('/meals');
}