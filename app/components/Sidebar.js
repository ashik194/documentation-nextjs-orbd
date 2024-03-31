import React from 'react'

function Sidebar() {
  return (
    <>
    

    <div className="app-menu">

    <a className='logo-box' href='index.html'>
        <img src="assets/images/logo-light.png" className="logo-light h-6" alt="Light logo"/>
        <img src="assets/images/logo-dark.png" className="logo-dark h-6" alt="Dark logo"/>
    </a>

{/* <!--- Menu --> */}
<div data-simplebar>
    <ul className="menu" data-fc-type="accordion">
        <li className="menu-title">Menu</li>

        <li className="menu-item">
            <a className='menu-link waves-effect' href='index.html'>
                <span className="menu-icon"><i className="ph-duotone ph-house"></i></span>
                <span className="menu-text"> Dashboard </span>
                <span className="badge bg-primary rounded ms-auto">01</span>
            </a>
        </li>

        <li className="menu-item">
            <a className='menu-link waves-effect' href='calendar.html'>
                <span className="menu-icon"><i className="ph-duotone ph-calendar"></i></span>
                <span className="menu-text"> Calendar </span>
            </a>
        </li>

        <li className="menu-title">Custom</li>

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link waves-effect">
                <span className="menu-icon"><i className="ph-duotone ph-file"></i></span>
                <span className="menu-text"> Extra Pages </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a className='menu-link' href='pages-starter.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Starter</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='pages-invoice.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Invoice</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='pages-maintenance.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Maintenance</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link waves-effect">
                <span className="menu-icon"><i className="ph-duotone ph-sign-in"></i></span>
                <span className="menu-text"> Auth Pages </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a className='menu-link' href='auth-login.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Log In</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='auth-register.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Register</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='auth-recoverpw.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Recover Password</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='auth-lock-screen.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Lock Screen</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link waves-effect">
                <span className="menu-icon"><i className="ph-duotone ph-bug"></i></span>
                <span className="menu-text"> Error Pages </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a className='menu-link' href='pages-404.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Error 404</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='pages-500.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Error 500</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link waves-effect">
                <span className="menu-icon"><i className="ph-duotone ph-layout"></i></span>
                <span className="menu-text"> Layout </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a className='menu-link' href='layout-light-sidebar.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Light Sidebar</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='layout-dark-topbar.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Dark Topbar</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="menu-title">Elements</li>

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link waves-effect">
                <span className="menu-icon"><i className="ph-duotone ph-cookie"></i></span>
                <span className="menu-text"> Components </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a className='menu-link' href='ui-alerts.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Alerts</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-buttons.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Buttons</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-collapse.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Collapse</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-dropdowns.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Dropdowns</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-progress.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Progress</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-skeleton.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Skeleton</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-spinners.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Spinners</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-ratio.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Ratio</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-tabs.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Tab</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-modals.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Modals</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-offcanvas.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Offcanvas</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-popovers.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Popovers</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-tooltips.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Tooltips</span>
                    </a>
                </li>
    
                <li className="menu-item">
                    <a className='menu-link' href='ui-swiper.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Swiper</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='ui-ratings.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Ratings</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link waves-effect">
                <span className="menu-icon"><i className="ph-duotone ph-pen-nib"></i></span>
                <span className="menu-text"> Forms </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a className='menu-link' href='forms-elements.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Form Elements</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='forms-masks.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Masks</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='forms-editor.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Editor</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='forms-validation.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Validation</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='forms-layout.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Form Layout</span>
                    </a>
                </li>
            </ul>
        </li>            

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link waves-effect">
                <span className="menu-icon"><i className="ph-duotone ph-map-pin"></i></span>
                <span className="menu-text"> Maps </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a className='menu-link' href='maps-vector.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Vector Maps</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a className='menu-link' href='maps-google.html'>
                        <span className="menu-dot"></span>
                        <span className="menu-text">Google Maps</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="menu-item">
            <a className='menu-link waves-effect' href='tables-basic.html'>
                <span className="menu-icon"><i className="ph-duotone ph-table"></i></span>
                <span className="menu-text"> Tables </span>
            </a>
        </li>

        <li className="menu-item">
            <a className='menu-link' href='charts-apex.html'>
                <span className="menu-icon"><i className="ph-duotone ph-chart-bar"></i></span>
                <span className="menu-text"> Chart </span>
            </a>
        </li>

        <li className="menu-item">
            <a href="javascript:void(0)" data-fc-type="collapse" className="menu-link">
                <span className="menu-icon">
                    <i className="ph-duotone ph-share-fat"></i>
                </span>
                <span className="menu-text"> Level </span>
                <span className="menu-arrow"></span>
            </a>

            <ul className="sub-menu hidden">
                <li className="menu-item">
                    <a href="javascript: void(0)" className="menu-link">
                        <span className="menu-dot"></span>
                        <span className="menu-text">Item 1</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="javascript: void(0)" className="menu-link">
                        <span className="menu-dot"></span>
                        <span className="menu-text">Item 2</span>
                        <span className="badge bg-info rounded ms-auto">New</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className="menu-item">
            <a href="javascript:void(0)" className="menu-link">
                <span className="menu-icon">
                    <i className="ph-duotone ph-seal-check"></i>
                </span>
                <span className="menu-text"> Badge Items </span>
                <span className="badge bg-danger rounded ms-auto">Hot</span>
            </a>
        </li>
    </ul>
</div>
</div>

    </>
  )
}

export default Sidebar