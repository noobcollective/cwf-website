function scrollToSection( sectionId ) {
    document.getElementById( sectionId ).scrollIntoView({ behavior: 'smooth' });
}

function copyToClipboard( icon ) {
    const code = icon.parentElement;
    const command = code.querySelector( '.code-content' );

    if ( navigator.clipboard ) {
        navigator.clipboard.writeText( command.textContent ).then( function() {
            const tooltip = code.querySelector( '.tooltip' );
            tooltip.classList.remove( 'hidden' );

            setTimeout(function() { tooltip.classList.add( 'hidden' ); }, 2000);
        }, function( err ) {
            const tooltip = code.querySelector( '.tooltip' );
            tooltip.textContent = 'Copy failed!';
            tooltip.classList.add( 'visible' );

            setTimeout(function() {
                tooltip.classList.add( 'hidden' );
                tooltip.classList.remove( 'visible' );
                tooltip.textContent = 'Copied!'; 
            }, 2000);
        } );
    }
}



