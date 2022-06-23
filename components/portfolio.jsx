import styles from './portfolio.module.scss'
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Portfolio() {

    const storefrontImages = [
        {
            original: '/images/storefront/storefront1.png',
        },
        {
            original: '/images/storefront/storefront2.png',
        },
    ];

    const recipeboxImages = [
        {
            original: '/images/recipebox/recipebox1.png',
        },
        {
            original: '/images/recipebox/recipebox2.png',
        },
    ];

    return (

        <div className={styles.container}>

            <h1>Portfolio</h1>
            <div className={styles.projectContainer}>
                <div className={styles.textContainer}>
                    <h3>Storefront</h3>
                    <p>A personal recipe organizer for the home cook. Designed to be navigable and readable on all screen sizes.
                        Implemented user interface using React with MaterialUI and custom CSS for styling.Focus on implementing intuitive interface.
                        Created API using Express and Mongoose with MongoDB for storage.Supports all CRUD operations.</p>
                    <button className={styles.button}>Check It Out Live </button>

                </div>
                <div className={styles.galleryContainer}>
                    <h3>Storefront Gallery</h3>
                    <ImageGallery items={storefrontImages} showPlayButton={false} showBullets={true} showThumbnails={false} showFullscreenButton={false} />
                </div>
            </div>
            <div className={styles.projectContainerReverse}>
                <div className={styles.textContainer}>
                    <h3>RecipeBox</h3>
                    <p>A personal recipe organizer for the home cook. Designed to be navigable and readable on all screen sizes.
                        Implemented user interface using React with MaterialUI and custom CSS for styling.Focus on implementing intuitive interface.
                        Created API using Express and Mongoose with MongoDB for storage.Supports all CRUD operations.</p>
                    <button className={styles.button}>Check It Out Live </button>
                </div>
                <div className={styles.galleryContainer}>
                    <h3>RecipeBox Gallery</h3>
                    <ImageGallery items={recipeboxImages} showPlayButton={false} showBullets={true} showThumbnails={false} showFullscreenButton={false} />
                </div>
            </div>


        </div>
    )
}