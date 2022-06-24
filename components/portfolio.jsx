import styles from './portfolio.module.scss'
import ImgGallery from './gallery';

export default function Portfolio() {

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
                    <ImgGallery itemData={storefrontImages} />
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
                    <ImgGallery itemData={recipeboxImages} />
                </div>
            </div>




        </div>
    )
}

const recipeboxImages = [
    {
            img: '/images/recipebox/recipebox1.png',
    },
    {
            img: '/images/recipebox/recipebox2.png',
    },
    {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    },
    {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    },
    {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    },
    {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    },
    {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    },
    {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    }
];

const storefrontImages = [
    {
            img: '/images/storefront/storefront1.png',
    },
    {
            img: '/images/storefront/storefront2.png',
    },
    {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    },
    {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    },
    {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    },
    {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    },
    {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    },
    {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    }
];


