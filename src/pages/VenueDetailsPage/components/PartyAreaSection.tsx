import Tab from "@/components/Tab";
import KeyHighlightSection from "./KeyHighlightSection";
import capacityIcon from "@/assets/images/Bitwig--Streamline-Simple-Icons.svg.png";
import PartyArea from '@/assets/images/partyarea.jpg'
import EntirePlace from '@/assets/images/entireplace.jpg'

const HighlightIconData = [
	{
		ImageUrl: capacityIcon,
		IconData: "100 Guest",
		IconSubData: "Capacity"
	},
	{
		ImageUrl: capacityIcon,
		IconData: "28",
		IconSubData: "Tables"
	}, {
		ImageUrl: capacityIcon,
		IconData: "Yes",
		IconSubData: "Separate Area"
	}, {
		ImageUrl: capacityIcon,
		IconData: "Yes",
		IconSubData: "AC"
	}, {
		ImageUrl: capacityIcon,
		IconData: "Yes",
		IconSubData: "Valet Parking"
	}, {

		ImageUrl: capacityIcon,
		IconData: "1500 sq ft",
		IconSubData: "Area"
	}
];

const videoData = [
	{ heading: "Video of Party Area", image: PartyArea },
	{ heading: "Video of entire place", image: EntirePlace }
];
type TabItem = {
	label: string;
	onClick: () => void;
};
type TabProps = {
	label: string,
	partyAreaTabs: TabItem[];
	activePartyTab: number; // To indicate the active tab
	setActivePartyTab: (index: number) => void; // Callback to handle tab change
};
const PartyAreaSection = ({ label, partyAreaTabs, activePartyTab, setActivePartyTab }: TabProps) => {
	return (
		<>
			<section className="row mx-0 my-md-5 my-3">
				<div className="col-12 ">
					<div className="mt-3">
						<h4 className="party-area-heading">{label}</h4>
						<div className="row mx-0 my-md-2 my-1">
							<div className="col-12 p-0">
								<Tab
									tabs={partyAreaTabs}
									activeTabIndex={activePartyTab}
									onTabChange={setActivePartyTab}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<KeyHighlightSection HighlightIconData={HighlightIconData} videoData={videoData} />
				</div>
			</section>
		</>
	)
}

export default PartyAreaSection;