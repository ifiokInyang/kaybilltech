export interface ButtonProps {
	type: "button" | "submit" | "reset";
	className: string;
	onClick?: () => void;
	text: string;
}

export interface ModalProps {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AboutModalProps {
	isAboutModalOpen: boolean;
	setIsAboutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	aboutModalRef: React.useRef<HTMLInputElement>;
}

export interface ServicesModalProp {
	isServicesModalOpen: boolean;
	servicesModalRef: React.useRef<HTMLInputElement>;
	setIsServicesModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TeamProps {
	gitHubUserName: string;
	linkedInUserName: string;
	linkedProfileUrl: string;
	memberId: number;
	position: string;
	profileImagePath: string;
	twitterHandle: string;
}
export interface TeamModalSScreenProps {
	teamsModal: boolean;
	setTeamsModal: React.Dispatch<React.SetStateAction<boolean>>;
	setIsSmallScreenServicesModal: React.Dispatch<React.SetStateAction<boolean>>;
	isSmallScreenServicesModal: boolean;
}

export interface IFormProps {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
}

export interface IHomeDataProps {
	title: string;
	description: string;
	subTitle: string;
	whyUs: string;
}

export interface IServicesHomeprops {
	category: string;
	description: string;
	serviceTitle: string;
	serviceId: string;
	serviceFeatures: string[];
}

export interface IDevProducts {
	name: string;
	description: string;
	logoPath: string;
	numberOfUsers: string;
	clientName: string;
	productUrl: string;
}

export interface ServiceProps {
	service?: string;
}

export interface ILogoProps {
	companyName: string;
	companyLogo: string;
	address: string;
	city: string;
	businessType: string;
	clientId: number;
}

export interface ServicesProps {
	serviceTitle: string;
	description: string;
	category: string;
	serviceId: number;
	serviceFeatures: string[];
}
export interface BackEndData {
	clientTestimonies: null;
	developedProducts: IDevProducts[];
	homeHero: IHomeDataProps;
	ourClients: ILogoProps[];
	ourServices: IServicesHomeprops[];
	teamMembers: TeamProps;
	status: boolean;
	statusCode: number;
}
