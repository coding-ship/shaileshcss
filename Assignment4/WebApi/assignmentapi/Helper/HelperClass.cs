﻿using assignmentapi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentapi.Helper
{
	public class HelperClass
	{
        public static List<AdminModel> Adminlist = new List<AdminModel>()
        {
            new AdminModel{ password="123562",username="admin" ,role="Admin" ,fname="Sagar"},
            //new AdminModel{ password="123",username="31sg@gmail.com" ,role="User"},


        };
       

        public static List<UserModel> Userlist = new List<UserModel>()
        {
            //new UserModel{ id=1,fname="Shubham" ,lname="Gupta", phone="9415311828"},
            // new UserModel{id=2,fname="Mohit" ,lname="Chopra", phone="9877237283"},
            //  new UserModel{ id=3,fname="Akash" ,lname="Singh", phone="9877218121"},
            //   new UserModel{ id=4,fname="Abhishek" ,lname="Gupta", phone="9327218122"},
            //    new UserModel{ id=5,fname="Abhay" ,lname="Srivastava", phone="9877878122"},
            //  new UserModel{ id=6,fname="Shailesh" ,lname="Agarwal", phone="8977218122"},
           
        };

        public static List<Userdata> Userdatalist = new List<Userdata>()
        {

        };

	}
}
