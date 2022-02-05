import React from 'react';
import '../index.css'

function Footer()
{
    return(
        <footer>
<div class="top_header">
<section>
<span><i class="fa fa-map-marker"></i></span>
<span>Street, full address, state/province, country, pincode</span>
</section>
<section>
<span><i class="fa fa-phone"></i></span>
<span>(00) 0000 0000</span>
</section>
<section>
<span><i class="fa fa-envelope"></i></span>
<span>info@websitename.com</span>
</section>
</div>
<span class="border-shape"></span>
<div class="bottom_content">
<section>
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-telegram"></i></a>
</section>
<section>
<a href="#">Home</a>
<a href="#">About us</a>
<a href="#">Order</a>
<a href="#">Retail</a>
<a href="#">Member</a>
<a href="#">Contact Us</a>
</section>
</div>

</footer>
    )
}

export default Footer;