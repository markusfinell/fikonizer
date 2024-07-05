
      function selectElementContents(el) {
          var range = document.createRange();
          range.selectNodeContents(el);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
      }

      const fikon = document.getElementById( 'fikon' );

      fikon.addEventListener( 'input', function ( e ) {
          document.getElementById( 'fikon-word' ).innerHTML = e.target.innerHTML;
      } );

      document.getElementById( 'create' ).addEventListener( 'click', function ( e ) {
          e.preventDefault();
          fikon.setAttribute( 'class', ( fikon.classList.contains( 'edit' ) ? '' : 'edit' ) );
          fikon.focus();
      } );

      fikon.addEventListener( 'focusin', function( e ) { 
          selectElementContents( e.target ) 
      } )

      fikon.addEventListener( 'focusout', function( e ) { 
          fikon.setAttribute( 'class', '' )
      } )

      document.querySelector( '#fikonizer' ).addEventListener( 'submit', function ( e ) {
          e.preventDefault()

          const fikonWord = fikon.innerHTML
            .toLowerCase().split(/([eyuioåaöä])/)
          const fikonStart = fikonWord.slice(0,2).join('')
          const fikonEnd = fikonWord.slice(2).join('')

          document.getElementById( 'result' ).innerHTML = document.getElementById( 'text' )
              .value.toLowerCase()
              .replace(/([^eyuioåaöä]*[eyuioåaöä])([^ ]*)/g, (m1, m2, m3) => {
              return fikonStart + m3 + ' ' + m2 + fikonEnd + ' '
          })
      })