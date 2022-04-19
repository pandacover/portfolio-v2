interface NavInterface {
    _id: number,
    name: string,
    link: string,
};

type NavTypes = Array<NavInterface>;

const NavItems: NavTypes = [
    { _id: 1, name: "About", link: "about" },
    { _id: 2, name: "Work", link: "work" },
    { _id: 3, name: 'Skills', link: 'skill' },
    { _id: 4, name: "Contact", link: "contact" }
]

export default NavItems;