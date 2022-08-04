// מסך ראשי 
let title,usname,div1,p1,p2,pass,btn;
div1= document.createElement('div');
div1.setAttribute('class','mainDiv');


title=document.createElement('h1');
title.innerHTML = 'SUDOKU';

usname=document.createElement('input');
usname.setAttribute('class','inputB');
usname.setAttribute('id','username');
usname.placeholder = 'User Name';

p1=document.createElement('p');
p1.setAttribute('class','alert');

pass=document.createElement('input');
pass.setAttribute('class','inputB');
pass.setAttribute('id','password');
pass.placeholder= 'Password';

p2=document.createElement('p');
p2.setAttribute('class','alert');

btn=document.createElement('button');
btn.innerHTML= 'enter';
btn.setAttribute('id','butn');
btn.setAttribute('class','bottun');
btn.addEventListener('click',testId);

div1.appendChild(title);
div1.appendChild(usname);
div1.appendChild(p1);
div1.appendChild(pass);
div1.appendChild(p2);
div1.appendChild(btn);
document.getElementById('main').appendChild(div1);

// כתיבת מסך רמת הקושי
let div2,title2,title3,title4,btn1,btn2,btn3;
div2= document.createElement('div');

title2=document.createElement('h1');
title2.setAttribute('id','h2');
title2.innerHTML = 'Welcome ';

title4=document.createElement('h1');
title4.innerHTML = 'ABCD';
title4.setAttribute('id','h4');


title3=document.createElement('h3');
title3.setAttribute('class','h3')
title3.innerHTML = 'Level difficulty';


btn1=document.createElement('button');
btn1.innerHTML= 'easy';
btn1.setAttribute('class','bottunLevel')
btn1.addEventListener('click',level1)
btn2=document.createElement('button');
btn2.innerHTML= 'medium';
btn2.setAttribute('class','bottunLevel')
btn2.addEventListener('click',level2)
btn3=document.createElement('button');
btn3.innerHTML= 'Master';
btn3.setAttribute('class','bottunLevel')
btn3.addEventListener('click',level3)




div2.appendChild(title2);
div2.appendChild(title4);
div2.appendChild(title3);
div2.appendChild(btn1);
div2.appendChild(btn2);
div2.appendChild(btn3);
document.getElementById('main').appendChild(div2);
div2.setAttribute('class','mainDiv');
div2.setAttribute('id','hidden');




// פונקציה שמתריעה על התוצאה בבדיקת סודוקו
function ResulteTestSudoku ()
{ 
    if (TestSudoku() == false)
    {    alert('לא נורא- אולי בעתיד תיהיה אלוף העולם בסודוקו')
               div2.setAttribute('id','visible');
               div3.setAttribute('id','hidden');
    }
    else {
            alert('כל הכבוד- אתה אלוף!!');
    div2.setAttribute('id','visible');
    div3.setAttribute('id','hidden');

    }
   
}

// פונקציה שבודקת את הסודוקו
function TestSudoku()
{getResult();
    
    
    let mat1=[],mat2=[],mat3=[],mat4=[],mat5=[],mat6=[],mat7=[],mat8=[],mat9=[];
    for(let i=0;i<matmain.length;i++)
    {
        for(let j=0;j<matmain[i].length;j++)
        {
            if(i>=0 && i<=2 && j>=0 && j<=2)
            {mat1.push(matmain[i][j])}
            else if(i>=0 && i<=2 && j>=3 && j<=5)
            {mat2.push(matmain[i][j])}
            else if(i>=0 && i<=2 && j>=6 && j<=8)
            {mat3.push(matmain[i][j])}
            else if(i>=3 && i<=5 && j>=0 && j<=2)
            {mat4.push(matmain[i][j])}
            else if(i>=3 && i<=5 && j>=3 && j<=5)
            {mat5.push(matmain[i][j])}
            else if(i>=3 && i<=5 && j>=6 && j<=8)
            {mat6.push(matmain[i][j])}
            else if(i>=6 && i<=8 && j>=0 && j<=2)
            {mat7.push(matmain[i][j])}
            else if(i>=6 && i<=8 && j>=3 && j<=5)
            {mat8.push(matmain[i][j])}
            else if(i>=6 && i<=8 && j>=6 && j<=8)
            {mat9.push(matmain[i][j])}
        }
    }
    for(let i=0;i<matmain.length;i++)
    {
        for(let j=0;j<matmain[i].length;j++)
        {
            // בדיקת מילוי תאים ע"י מספרים בלבד
            if(matmain[i][j]=='')
            {
            alert ('נא למלא את כל התאים')
            return bobo;
            }
            if(matmain[i][j]>'9' || matmain[i][j]<'1')
            {
            alert ('נא למלא רק מספרים בין 1-9')
            return bobo;
            }
           

            // בדיקת שורה
            for(let k=0;k<matmain[i].length;k++)
            {
                if(k==j)
                {
                    continue;
                }
                if(matmain[i][k]>'9' || matmain[i][k]<'1')
                {
                alert ('נא למלא רק מספרים בין 1-9')
                return bobo;
                }
                if(matmain[i][k]=='')
                {
                alert ('נא למלא את כל התאים')
                
                return bobo; 
                }  
                if(matmain[i][j]==matmain[i][k])
                {
                    alert ('הסודוקו שגוי')
                    return false;
                }
            }
             // בדיקת עמודה
             for(let n=0;n<matmain[i].length;n++)
             {
                 if(n==i)
                 {
                     continue;
                 }
                 if(matmain[n][j]>'9' || matmain[n][j]<'1')
                 {
                     alert ('נא למלא רק מספרים בין 1-9')
                 return bobo
                }
                 if(matmain[n][j]=='')
                 {
                 alert ('נא למלא את כל התאים')
                 return bobo 
                }    
                 if(matmain[i][j]==matmain[n][j])
                 {
                    alert ('הסודוקו שגוי')
                    return false;

                 }
                
             };
            //  בדיקת מסגרת
            if(i>=0 && i<=2 && j>=0 && j<=2)
            {
               TestMat1(matmain,mat1,i,j)
            };
            if(i>=0 && i<=2 && j>=3 && j<=5)
            {TestMat2(matmain,mat2,i,j)}
            if(i>=0 && i<=2 && j>=6 && j<=8)
            {TestMat3(matmain,mat3,i,j)}
            if(i>=3 && i<=5 && j>=0 && j<=2)
            {TestMat4(matmain,mat4,i,j)}
            if(i>=3 && i<=5 && j>=3 && j<=5)
            {TestMat5(matmain,mat5,i,j)}
            if(i>=3 && i<=5 && j>=6 && j<=8)
            {TestMat6(matmain,mat6,i,j)}
            if(i>=6 && i<=8 && j>=0 && j<=2)
            {TestMat7(matmain,mat7,i,j)}
            if(i>=6 && i<=8 && j>=3 && j<=5)
            {TestMat8(matmain,mat8,i,j)}
            if(i>=6 && i<=8 && j>=6 && j<=8)
            {TestMat9(matmain,mat9,i,j)}
        }
    }
    alert('כל הכבוד- אתה אלוף!!');
    div2.setAttribute('id','visible');
    div3.setAttribute('id','hidden');


}


function TestMat1(matmain,mat1,i,j)
{
    let cnt =2
    for(let m=0;m<mat1.length;m++)
    {
            if(mat1[m]>'9' || mat1[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat1[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat1[m])
            cnt--
            if(cnt==0)
            { alert ('הסודוקו שגוי')
            return false;
            }
    }
};
function TestMat2(matmain,mat2,i,j)
{
    let cnt =2
    for(let m=0;m<mat2.length;m++)
    {
            if(mat2[m]>'9' || mat2[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat2[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat2[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}
       
    }
};
function TestMat3(matmain,mat3,i,j)
{
    let cnt =2
    for(let m=0;m<mat3.length;m++)
    {
        if(mat3[m]>'9' || mat3[m]<'1')
        alert ('נא למלא רק מספרים בין 1-9')
        if(mat3[m]=='')
        {
            alert ('נא למלא את כל התאים')
        }

        for(let h=0;h<mat3[m].length;h++)
        {
            if(matmain[i][j]==mat3[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}
        }
    }
};
function TestMat4(matmain,mat4,i,j)
{
    let cnt =2
    for(let m=0;m<mat4.length;m++)
    {
            if(mat4[m]>'9' || mat4[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat4[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat4[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}
        
    }
};
function TestMat5(matmain,mat5,i,j)
{
    let cnt =2
    for(let m=0;m<mat5.length;m++)
    {
       
            if(mat5[m]>'9' || mat5[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat5[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat5[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}

    }
};
function TestMat6(matmain,mat6,i,j)
{
    let cnt =2
    for(let m=0;m<mat6.length;m++)
    {
       
            if(mat6[m]>'9' || mat6[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat6[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat6[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}
        
    }
};
function TestMat7(matmain,mat7,i,j)
{
    let cnt =2
    for(let m=0;m<mat7.length;m++)
    {
       
            if(mat7[m]>'9' || mat7[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat7[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat7[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}
        
    }
};
function TestMat8(matmain,mat8,i,j)
{
    let cnt =2
    for(let m=0;m<mat8.length;m++)
    {
       
            if(mat8[m]>'9' || mat8[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat8[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat8[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}
        
    }
};
function TestMat9(matmain,mat9,i,j)
{
    let cnt =2
    for(let m=0;m<mat9.length;m++)
    {
       
            if(mat9[m]>'9' || mat9[m]<'1')
            alert ('נא למלא רק מספרים בין 1-9')
            if(mat9[m]=='')
            {
                alert ('נא למלא את כל התאים')
            }

            if(matmain[i][j]==mat9[m])
            cnt--
            if(cnt==0)
            {alert ('הסודוקו שגוי')
            return false;}
        
    }
}




// מסך הסודקו
let div3,div4,table,h1,td,tr,input,btn0,btn00;
div3=document.createElement('div');
div3.setAttribute('id','hidden');
div3.setAttribute('class','mainDiv');

div4=document.createElement('div');



h1=document.createElement('h1');
h1.setAttribute('class','h3')
h1.innerHTML='Good Luck';

table=document.createElement('table');
table.setAttribute('id','table');

div3.appendChild(h1);
div4.appendChild(table);
div3.appendChild(div4);
document.getElementById('main').appendChild(div3);

let cnt=0;
for(let i=1;i<10;i++)
{
    tr=document.createElement('tr');
    tr.setAttribute('id',('tr'+i));
    table.appendChild(tr);
    for(let j=1;j<10;j++)
    {
        cnt++;
        td=document.createElement('td');
        td.setAttribute('id',('td'+cnt));
        input= document.createElement('input');
        input.maxLength='1';
        input.setAttribute('id',('input'+cnt));
        td.appendChild(input);
        
        document.getElementById('tr'+i).appendChild(td);
       

    }
}
btn0=document.createElement('button');
btn0.innerHTML='Finish';
btn0.setAttribute('class','bottunBord')
btn0.addEventListener('click',ResulteTestSudoku);
btn00=document.createElement('button');
btn00.innerHTML='Again';
btn00.setAttribute('class','bottunBord')
btn00.addEventListener('click',getValue);

div3.appendChild(btn0);
div3.appendChild(btn00);




// פונקצי'ה המגרילה סודוקו
let arr=[[],[],[],[],[],[],[],[],[]];
function getSudoku()
{
    let reset=0;
    
    let random=0;
    let flag=true;
    let cnt=0;
    for(let i=0;i<9;i++)
    {
     for(let j=0;j<9;j++)
     {
        random=Math.floor(Math.random()*(9)+1); 
       for(let k=0;k<arr[i].length+1;k++)
         { 
          if(random==arr[i][k])
            {
                flag=false;
                break;
            }
         }
 
         if(flag==true)
         {
      for(let c=0;c<=i;c++)
        {
          if(random==arr[c][j])
          {
               flag=false;
               cnt++
               break;
          }
        }
         }
         

         if (flag==true)
         {
             if(i<=2 && j<=2)
             {
                 for(let z=0; z<=2;z++)
                 {
                     for(let y=0;y<=2;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i<=2 && j>=3 && j<=5)
             {
                 for(let z=0; z<=2;z++)
                 {
                     for(let y=3;y<=5;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i<=2 && j>=6 && j<=9)
             {
                 for(let z=0; z<=2;z++)
                 {
                     for(let y=6;y<=9;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i>=3 && i<=5 && j<=2)
             {
                 for(let z=3; z<=5;z++)
                 {
                     for(let y=0;y<=2;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i>=3 && i<=5 && j>=3 && j<=5)
             {
                 for(let z=3; z<=5;z++)
                 {
                     for(let y=3;y<=5;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i>=3 && i<=5 && j>=6 && j<=8)
             {
                 for(let z=3; z<=5;z++)
                 {
                     for(let y=6;y<=8;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i>=6 && i<=8 && j<=2)
             {
                 for(let z=6; z<=8;z++)
                 {
                     for(let y=0;y<=2;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i>=6 && i<=8 && j>=3 && j<=5)
             {
                 for(let z=6; z<=8;z++)
                 {
                     for(let y=3;y<=5;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
             if(i>=6 && i<=8 && j>=6 && j<=8)
             {
                 for(let z=6; z<=8;z++)
                 {
                     for(let y=6;y<=8;y++)
                     {
                       if(random==arr[z][y])
                       {
                          flag=false;
                          cnt++
                          break;

                       }
                     }
                 }
             }
         }



     if(flag==true)
         {
             arr[i][j]=random;
         }
         else
         { 
              j--;
         
         flag=true;
         if(cnt==20)
         {
             arr[i]=[];
             j=-1;
             cnt=0;
             reset++;
         }
         if(reset==10)
         {
             i=0;
             arr=[[],[],[],[],[],[],[],[],[]];
             reset=0;
         }

        }



        
     }
    }
return arr;
}


// פונקציית בדיקה שם משתמש וסיסמא
function testId(user,pass)
{
    user=document.getElementById('username').value;
    pass=document.getElementById('password').value;

    if(user =='')
    {
        p1.innerHTML='enter username'
        return false
    }
    p1.innerHTML='';
    if(user!='abcd')
    {
        p1.innerHTML='Incorrect username'
        return false
    }
    p1.innerHTML='';
    if(pass!='1234')
    {
        p2.innerHTML='try password again'
        return false
    }
    p2.innerHTML='';
    div1.setAttribute('id','hidden');
    div2.setAttribute('id','visible')
}


// פונקציית העברות דרגות קושי
let mat=arr;
function level1 ()
{
    getSudoku();
    console.log ('סיים בניית סודוקו');
    let mat=arr;
    for(let i=0;i<=20;i++)
    {
        let x= Math.floor(Math.random()*(8-0+1));
        let y= Math.floor(Math.random()*(8-0+1));
        if(mat[x][y]=='')
        {
            i--;
        }
        mat[x][y]='';
    }
    console.log ('סיים הסתרת סודוקו');

    getValue();
    console.log ('סיים בניית אינפוט');

    div2.setAttribute('id','hidden');
    div3.setAttribute('id','visible');


}
function level2 ()
{
    getSudoku();
    let mat=arr;
    for(let i=0;i<=32;i++)
    {
        let x= Math.floor(Math.random()*(8-0+1));
        let y= Math.floor(Math.random()*(8-0+1));
        if(mat[x][y]=='')
        {
            i--;
        }
        mat[x][y]='';
    }
    getValue();
    div2.setAttribute('id','hidden');
    div3.setAttribute('id','visible');
}

function level3 ()
{
    getSudoku()
    let mat=arr;
    
    for(let i=0;i<=48;i++)
    {
        let x= Math.floor(Math.random()*(8-0+1));
        let y= Math.floor(Math.random()*(8-0+1));
        if(mat[x][y]=='')
        {
            i--;
        }
        mat[x][y]='';
    }
    getValue();
    div2.setAttribute('id','hidden');
    div3.setAttribute('id','visible');

}


// let x=0;
// debugger
// input.addEventListener('change', checkValue(value));
// input.addEventListener('change')
// function checkValue() 
// {debugger
//     for (let i=1;i<=81;i++)
//     {
//         let val = document.getElementById('input'+i);
//         if (val<'1' || val>'9')
//         {
//           alert ('הכנסת אות לא נכונה');
//           return false
//         }
              
//     }
// }



// פונקצי'ה המאפסת את המשחק להתחלה




// פונקצי'ה המניחה סודקו רצוי בטבלא
function getValue()
{let num=0;
 let val=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        { num++;
           val='input'+num;
            document.getElementById(val).value=arr[i][j];
        }
    }
    
}


// פונקצי'ה המקבלת את תשובת השחקן
let matmain=[[],[],[],[],[],[],[],[],[]];
function getResult()
{
    let num=0;
    let val=0;
     for(let i=0;i<9;i++)
     {
        for(let j=0;j<9;j++)
        { num++;
           val='input'+num;
            matmain[i][j]=document.getElementById(val).value;
        }
     }
     return matmain;
    
}



