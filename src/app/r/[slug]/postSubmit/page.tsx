import { FC } from "react";

interface PageProps {
	params: {
		slug: string;
	};
}

const Page: FC<PageProps> = ({ params }: PageProps) => {
	return <div>Page</div>;
};

export default Page;
