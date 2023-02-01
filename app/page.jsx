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
                  <Link href="#">
                    <li>FALCON 9</li>
                  </Link>
                  <Link href="#">
                    <li>FALCON HEAVY</li>
                  </Link>
                  <Link href="#">
                    <li>DRAGON</li>
                  </Link>
                  <Link href="#">
                    <li>STARSHIP</li>
                  </Link>
                  <Link href="#">
                    <li>HUMAN SPACEFLIGHT</li>
                  </Link>
                  <Link href="#">
                    <li>RIDESHARE</li>
                  </Link>
                  <Link href="#">
                    <li>RIDESHARE</li>
                  </Link>
                  <Link href="#">
                    <li>STARLINK</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
          <div className="menu">
            <ul>
              <Link href="#">
                <li>SHOP</li>
              </Link>
            </ul>
            <button>
              <div className="button-item"></div>
              <div className="button-item"></div>
              <div className="button-item"></div>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
