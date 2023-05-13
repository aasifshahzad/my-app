import Card from "../../../component/card";
import Nav from "../../../component/nav";
import Link from "next/link";

export default function Product() {
    return (
        <div>
            <Nav />
            <br />
            <br />
            <h3>Product list</h3>
            <ol>
                <li><Link href = "/products/product">Product1</Link></li>
            </ol>
            <Card />
        </div>
    )
}