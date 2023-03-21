      function calcular(){
          var r = document.getElementById('r')
          var pv1 = parseFloat(document.getElementById('pv1').value)
          var pv2 = parseFloat(document.getElementById('pv2').value)
          var pv3 = parseFloat(document.getElementById('pv3').value)
          var pv4 = parseFloat(document.getElementById('pv4').value)
          var calc = (pv1+pv2)*pv3
          var res1 = calc + pv4*calc
          var res2 = calc - pv4*calc
          r.innerHTML = `A resistência está entre ${res1.toFixed(2)} Ω e ${res2.toFixed(2)} Ω`
        }
