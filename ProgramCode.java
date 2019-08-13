import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ProgramCode 
{
	public static List<String> getMonth(String seriesCode)	{
		
		// Write a program to accept a sample pattern and generate the next 5 , and return the list.
		//EXAMPLES
				// 1.   AH001  - > AH002 ,AH003,AH004 ,AH005,AH006
				//2 .   HAWK01 - > HAWK02,HAWK02,HAWK03,HAWK05,HAWK06
		


List<String> list=new ArrayList<>();
String s="";
String i="";


for(int j=0;j<seriesCode.length();j++)
{
Character ch=seriesCode.charAt(j);
if(ch.isLetter(ch) || ch=='0')
{
	s+=ch.toString();
}
else
{
	break;
}
}

i=seriesCode.substring(s.length());
	
for(int k=0;k<5;k++)
{
int num=Integer.parseInt(i)+1;	
i=Integer.toString(num);		
String f=s+i;
list.add(f);
}
return list;
}
}









