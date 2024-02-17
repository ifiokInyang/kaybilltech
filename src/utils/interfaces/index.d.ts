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
	img: string;
	desc: string;
	linkedIn: string;
	handle: string;
	alt: string;
}

export interface ServiceProps {
	service?: string;
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
  message: string;
}