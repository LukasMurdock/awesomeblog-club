import Link from "next/link";
import { store } from "../utils/store";

export function Tags() {
  return (
    <div>
      <h5> All tags </h5>
      <div className="tags-container">
        {store.getTags().map((tag, index) => {
          return (
            <Link key={index} href={`/tags/[id]`} as={`/tags/${tag}`}>
              <div>
                <a> {tag} </a>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
