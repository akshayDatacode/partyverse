import VenueCategoryTiles from "@/module/VenueCategoryTiles";

const VenueListFilterTiles = () => {
    return (
        <div className="row mx-0 d-flex justify-content-end my-5 py-5">
            <div className="col-md-11 col-12 px-4">
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
        </div>
    );
}

export default VenueListFilterTiles;
