import Image from 'next/image'
import { Roboto } from '@next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin-ext'],
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <header>
        <Image
          src="/back_image_a.jpg"
          alt=""
          width="7680"
          height="4320"
          className="first"
        />
        <div className="header-cointeiner">
          <div className="header-content">
            <Image
              src="/X_logo.png"
              alt="logo"
              width="726"
              height="96"
              className="logo"
            />
            <nav>
              <div className="navbar">
                <ul>
                  <li>
                    <Link href="#">FALCON 9</Link>
                  </li>
                  <li>
                    <Link href="#">FALCON HEAVY</Link>
                  </li>
                  <li>
                    <Link href="#">DRAGON</Link>
                  </li>
                  <li>
                    <Link href="#">STARSHIP</Link>
                  </li>
                  <li>
                    <Link href="#">HUMAN SPACEFLIGHT</Link>
                  </li>
                  <li>
                    <Link href="#">RIDESHARE</Link>
                  </li>
                  <li>
                    <Link href="#">STARSHIELD</Link>
                  </li>
                  <li>
                    <Link href="#">STARLINK</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="menu-position">
            <div className="menu">
              <ul>
                <Link href="#">
                  <li>SHOP</li>
                </Link>
              </ul>
              <button>
                <div className="button-item" id="botton-item-top"></div>
                <div className="button-item" id="botton-item-middle"></div>
                <div className="button-item" id="botton-item-bottom"></div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
