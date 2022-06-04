function calc()
            {
                var height = parseFloat(document.getElementById('cinput1').value);
                var perimetr = parseFloat(document.getElementById('cinput2').value);
                var thick=parseFloat(document.getElementById('cinput3').value);
                
                var arb = document.getElementById('arbolit_types').value;
                
                if(arb === 'standard')
                {
                    document.getElementById('result').value = height*perimetr*thick*92/100 +" куб. м.";
                }
                
                if(arb === 'peregorod')
                {
                    document.getElementById('result').value =height*perimetr*thick*92/100  +" куб. м.";
                }
                
                if(arb === 'u-type')
                {
                    document.getElementById('result').value = height*perimetr*thick*92/100  +" куб. м.";
                }
            }
            