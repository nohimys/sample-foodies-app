'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }: any) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        if(imageInput && imageInput.current){
            imageInput.current.click();
        }
    }

    function handleImageChange(event: any) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(undefined);
            return;
        }

        const fileReader: any = new FileReader();

        //Once readAsDataURL method execution is completed, this callback will be triggered.
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        //To make the file representable in an Image tag
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}