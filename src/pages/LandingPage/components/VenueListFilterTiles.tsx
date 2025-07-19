import VenueCategoryTiles from "@/module/VenueCategoryTiles";

const VenueListFilterTiles = () => {
    return (
        <section className="row mx-0 d-flex justify-content-end my-md-5 py-md-5 my-3 py-3">
            <div className="col-md-11 col-12 px-md-0 px-3">
                {/* Example filter tiles */}
                <VenueCategoryTiles
                    categoryTitle="Top Locations"
                    description="The Collection that is top notch among all the platforms."
                />
                <VenueCategoryTiles
                    categoryTitle="Luxe Collection"
                    description="The Collection that is top notch among all the platforms."
                />
                <VenueCategoryTiles
                    categoryTitle="Newly Opened"
                    description="The Collection that is New Added."
                />
            </div>
        </section>
    );
}

export default VenueListFilterTiles;
