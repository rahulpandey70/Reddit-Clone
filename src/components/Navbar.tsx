import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
	const session = await getAuthSession();

	return (
		<div className="fixed top-0 inset-x-0 h-fix bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
			<div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
				<Link href="/" className="flex gap-2 items-center">
					<p className=" text-zinc-700 text-lg font-semibold md:block tracking-wider">
						AskQuery
					</p>
				</Link>

				{/* serach bar */}

				{session?.user ? (
					<UserAccountNav user={session.user} />
				) : (
					<Link href="/sign-in" className={buttonVariants()}>
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
