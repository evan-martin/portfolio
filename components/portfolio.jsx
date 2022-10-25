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
                                        <h3>Project Gallery</h3>
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
                                        <h3>Project Gallery</h3>
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
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656854/storefront/storefront-home_ehzvr3.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656849/storefront/storefront-collection_ktqkfa.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656852/storefront/storefront-modal_zujfqb.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656836/storefront/storefront-cart_jnf6qo.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656836/storefront/storefront-checkout_agjrvv.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656850/storefront/storefront-home1-mobile_bgsegh.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656852/storefront/storefront-home2-mobile_fwq6tw.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656850/storefront/storefront-collection1-mobile_lhq1rp.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656849/storefront/storefront-collection2-mobile_j7jofp.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656853/storefront/storefront-modal-mobile_ue6hmj.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656838/storefront/storefront-cart-mobile_nmbjls.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656836/storefront/storefront-checkout-mobile_spckgb.png',
        },
];


