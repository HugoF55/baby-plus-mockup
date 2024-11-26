(()=>{"use strict";var e={5699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var o=n(6665),r=n(3929),i=n(6283),a=n(5675),l=n(6986),s=n(5672),d=n(5248),c=n(6654),u=n(8833),f=n(8634),h=n(5648),g=n(5991),x=n(484),m=n(6725),y=n(893),p=n(397),j=m.default.get("window"),F=(j.width,j.height,a.default.create({pageContainer:{flex:1,backgroundColor:"#F8F9FA",alignItems:"center",justifyContent:"center",minHeight:"100vh",width:"100%"},mainContainer:{position:"relative",width:"web"===g.default.OS?375:"100%",height:"web"===g.default.OS?812:"100%",backgroundColor:"transparent",display:"flex",alignItems:"center",justifyContent:"center"},frameContainer:{width:"100%",height:"100%",backgroundColor:"#FFFFFF",borderRadius:"web"===g.default.OS?44:0,overflow:"hidden",position:"relative",boxShadow:"web"===g.default.OS?"0 8px 40px rgba(0, 0, 0, 0.12)":"none"},notch:{width:219,height:30,backgroundColor:"#000000",borderBottomLeftRadius:24,borderBottomRightRadius:24,alignSelf:"center",position:"absolute",top:0,zIndex:1},content:{flex:1,alignItems:"center",justifyContent:"center",padding:16,paddingTop:"web"===g.default.OS?60:20},illustration:{width:300,height:300,marginBottom:32,objectFit:"contain",marginTop:-16},textContent:{alignItems:"center",marginBottom:32,maxWidth:343,width:"100%"},title:{fontSize:32,lineHeight:"38px",fontWeight:"700",color:"#1A1A1A",marginBottom:12,textAlign:"center",fontFamily:"web"===g.default.OS?"SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif":void 0},subtitle:{fontSize:16,lineHeight:"24px",fontWeight:"400",color:"#4D4D4D",textAlign:"center",paddingHorizontal:16,fontFamily:"web"===g.default.OS?"SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif":void 0},buttons:{width:"100%",maxWidth:343,marginBottom:32,paddingHorizontal:16},button:{width:"100%",height:56,borderRadius:28,marginBottom:12,overflow:"hidden"},gradient:{flex:1,alignItems:"center",justifyContent:"center"},buttonText:{fontSize:18,lineHeight:"22px",fontWeight:"600",color:"#FFFFFF",fontFamily:"web"===g.default.OS?"SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif":void 0},loginButton:{backgroundColor:"#F8F9FA",alignItems:"center",justifyContent:"center"},loginButtonText:{fontSize:18,lineHeight:"22px",fontWeight:"600",color:"#7B4BFF",fontFamily:"web"===g.default.OS?"SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif":void 0},homeIndicator:{width:134,height:5,backgroundColor:"#000000",borderRadius:100,position:"absolute",bottom:"web"===g.default.OS?8:0,alignSelf:"center",opacity:"web"===g.default.OS?.4:0}}));const b=function(e){var t=e.navigation;return(0,p.jsx)(r.default,{style:F.pageContainer,children:(0,p.jsx)(r.default,{style:F.mainContainer,children:(0,p.jsxs)(r.default,{style:F.frameContainer,children:[(0,p.jsx)(r.default,{style:F.notch}),(0,p.jsxs)(r.default,{style:F.content,children:[(0,p.jsx)(x.default,{source:n(8499),style:F.illustration,resizeMode:"contain"}),(0,p.jsxs)(r.default,{style:F.textContent,children:[(0,p.jsx)(i.default,{style:F.title,children:"Welcome to Baby+"}),(0,p.jsx)(i.default,{style:F.subtitle,children:"Your personal pregnancy companion. Track your journey, learn from experts, and connect with our AI assistant."})]}),(0,p.jsxs)(r.default,{style:F.buttons,children:[(0,p.jsx)(h.default,{style:F.button,onPress:function(){return t.navigate("Register")},children:(0,p.jsx)(y.LinearGradient,{colors:["#7B4BFF","#B927AE"],start:{x:0,y:0},end:{x:1,y:0},style:F.gradient,children:(0,p.jsx)(i.default,{style:F.buttonText,children:"Get Started"})})}),(0,p.jsx)(h.default,{style:[F.button,F.loginButton],onPress:function(){return t.navigate("Login")},children:(0,p.jsx)(i.default,{style:F.loginButtonText,children:"I already have an account"})})]}),(0,p.jsx)(r.default,{style:F.homeIndicator})]})]})})})};var C=n(296),S=n(6773),w=n(4701),B=n(4767),T=n(1950),v=n(2365),k=n(2772),z=a.default.create({container:{flex:1,backgroundColor:"#FFFFFF"},content:{flex:1,padding:20},header:{marginTop:20,marginBottom:40},backButton:{marginBottom:20},title:{fontSize:32,fontWeight:"700",color:"#333333",marginBottom:8},subtitle:{fontSize:16,color:"#666666"},form:{flex:1},inputContainer:{flexDirection:"row",alignItems:"center",backgroundColor:"#F5F5F5",borderRadius:12,paddingHorizontal:16,marginBottom:16,height:56},input:{flex:1,marginLeft:12,fontSize:16,color:"#333333"},forgotPassword:{alignSelf:"flex-end",marginBottom:24},forgotPasswordText:{fontSize:14,color:"#6B4EFF",fontWeight:"500"},loginButton:{backgroundColor:"#6B4EFF",height:56,borderRadius:28,justifyContent:"center",alignItems:"center"},loginButtonText:{fontSize:18,fontWeight:"600",color:"#FFFFFF"},footer:{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:40,marginBottom:20},footerText:{fontSize:16,color:"#666666"},registerLink:{fontSize:16,fontWeight:"600",color:"#6B4EFF"}});const I=function(e){var t=e.navigation,n=(0,o.useState)(""),a=(0,C.default)(n,2),l=a[0],s=a[1],d=(0,o.useState)(""),u=(0,C.default)(d,2),f=u[0],x=u[1],m=(0,o.useState)(!1),y=(0,C.default)(m,2),j=y[0],F=y[1];return(0,p.jsx)(w.default,{style:z.container,children:(0,p.jsx)(T.default,{onPress:v.default.dismiss,children:(0,p.jsx)(B.default,{behavior:"ios"===g.default.OS?"padding":"height",style:z.content,children:(0,p.jsxs)(k.default,{showsVerticalScrollIndicator:!1,children:[(0,p.jsxs)(r.default,{style:z.header,children:[(0,p.jsx)(h.default,{style:z.backButton,onPress:function(){return t.goBack()},children:(0,p.jsx)(c.default,{name:"arrow-left",size:24,color:"#333333"})}),(0,p.jsx)(i.default,{style:z.title,children:"Welcome Back"}),(0,p.jsx)(i.default,{style:z.subtitle,children:"Sign in to continue"})]}),(0,p.jsxs)(r.default,{style:z.form,children:[(0,p.jsxs)(r.default,{style:z.inputContainer,children:[(0,p.jsx)(c.default,{name:"email-outline",size:24,color:"#666666"}),(0,p.jsx)(S.default,{style:z.input,placeholder:"Email",placeholderTextColor:"#666666",value:l,onChangeText:s,keyboardType:"email-address",autoCapitalize:"none"})]}),(0,p.jsxs)(r.default,{style:z.inputContainer,children:[(0,p.jsx)(c.default,{name:"lock-outline",size:24,color:"#666666"}),(0,p.jsx)(S.default,{style:z.input,placeholder:"Password",placeholderTextColor:"#666666",value:f,onChangeText:x,secureTextEntry:!j}),(0,p.jsx)(h.default,{onPress:function(){return F(!j)},children:(0,p.jsx)(c.default,{name:j?"eye-off":"eye",size:24,color:"#666666"})})]}),(0,p.jsx)(h.default,{style:z.forgotPassword,children:(0,p.jsx)(i.default,{style:z.forgotPasswordText,children:"Forgot Password?"})}),(0,p.jsx)(h.default,{style:z.loginButton,onPress:function(){return t.navigate("MainTabs")},children:(0,p.jsx)(i.default,{style:z.loginButtonText,children:"Login"})})]}),(0,p.jsxs)(r.default,{style:z.footer,children:[(0,p.jsx)(i.default,{style:z.footerText,children:"Don't have an account? "}),(0,p.jsx)(h.default,{onPress:function(){return t.navigate("Register")},children:(0,p.jsx)(i.default,{style:z.registerLink,children:"Create Account"})})]})]})})})})};var O=a.default.create({container:{flex:1,backgroundColor:"#FFFFFF"},content:{flex:1,padding:20},header:{marginTop:20,marginBottom:40},backButton:{marginBottom:20},title:{fontSize:32,fontWeight:"700",color:"#333333",marginBottom:8},subtitle:{fontSize:16,color:"#666666"},form:{flex:1},inputContainer:{flexDirection:"row",alignItems:"center",backgroundColor:"#F5F5F5",borderRadius:12,paddingHorizontal:16,marginBottom:16,height:56},input:{flex:1,marginLeft:12,fontSize:16,color:"#333333"},registerButton:{backgroundColor:"#6B4EFF",height:56,borderRadius:28,justifyContent:"center",alignItems:"center",marginTop:8,marginBottom:24},registerButtonText:{fontSize:18,fontWeight:"600",color:"#FFFFFF"},termsContainer:{alignItems:"center",paddingHorizontal:20},termsText:{fontSize:14,color:"#666666",textAlign:"center",lineHeight:20},termsLink:{color:"#6B4EFF",fontWeight:"500"},footer:{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:40,marginBottom:20},footerText:{fontSize:16,color:"#666666"},loginLink:{fontSize:16,fontWeight:"600",color:"#6B4EFF"}});const P=function(e){var t=e.navigation,n=(0,o.useState)(""),a=(0,C.default)(n,2),l=a[0],s=a[1],d=(0,o.useState)(""),u=(0,C.default)(d,2),f=u[0],x=u[1],m=(0,o.useState)(""),y=(0,C.default)(m,2),j=y[0],F=y[1],b=(0,o.useState)(!1),z=(0,C.default)(b,2),I=z[0],P=z[1];return(0,p.jsx)(w.default,{style:O.container,children:(0,p.jsx)(T.default,{onPress:v.default.dismiss,children:(0,p.jsx)(B.default,{behavior:"ios"===g.default.OS?"padding":"height",style:O.content,children:(0,p.jsxs)(k.default,{showsVerticalScrollIndicator:!1,children:[(0,p.jsxs)(r.default,{style:O.header,children:[(0,p.jsx)(h.default,{style:O.backButton,onPress:function(){return t.goBack()},children:(0,p.jsx)(c.default,{name:"arrow-left",size:24,color:"#333333"})}),(0,p.jsx)(i.default,{style:O.title,children:"Create Account"}),(0,p.jsx)(i.default,{style:O.subtitle,children:"Sign up to get started"})]}),(0,p.jsxs)(r.default,{style:O.form,children:[(0,p.jsxs)(r.default,{style:O.inputContainer,children:[(0,p.jsx)(c.default,{name:"account-outline",size:24,color:"#666666"}),(0,p.jsx)(S.default,{style:O.input,placeholder:"Full Name",placeholderTextColor:"#666666",value:l,onChangeText:s})]}),(0,p.jsxs)(r.default,{style:O.inputContainer,children:[(0,p.jsx)(c.default,{name:"email-outline",size:24,color:"#666666"}),(0,p.jsx)(S.default,{style:O.input,placeholder:"Email",placeholderTextColor:"#666666",value:f,onChangeText:x,keyboardType:"email-address",autoCapitalize:"none"})]}),(0,p.jsxs)(r.default,{style:O.inputContainer,children:[(0,p.jsx)(c.default,{name:"lock-outline",size:24,color:"#666666"}),(0,p.jsx)(S.default,{style:O.input,placeholder:"Password",placeholderTextColor:"#666666",value:j,onChangeText:F,secureTextEntry:!I}),(0,p.jsx)(h.default,{onPress:function(){return P(!I)},children:(0,p.jsx)(c.default,{name:I?"eye-off":"eye",size:24,color:"#666666"})})]}),(0,p.jsx)(h.default,{style:O.registerButton,onPress:function(){return t.navigate("MainTabs")},children:(0,p.jsx)(i.default,{style:O.registerButtonText,children:"Create Account"})}),(0,p.jsx)(r.default,{style:O.termsContainer,children:(0,p.jsxs)(i.default,{style:O.termsText,children:["By creating an account, you agree to our"," ",(0,p.jsx)(i.default,{style:O.termsLink,children:"Terms & Conditions"})," ","and"," ",(0,p.jsx)(i.default,{style:O.termsLink,children:"Privacy Policy"})]})})]}),(0,p.jsxs)(r.default,{style:O.footer,children:[(0,p.jsx)(i.default,{style:O.footerText,children:"Already have an account? "}),(0,p.jsx)(h.default,{onPress:function(){return t.navigate("Login")},children:(0,p.jsx)(i.default,{style:O.loginLink,children:"Login"})})]})]})})})})};var R=n(4467);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,R.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=(m.default.get("window").width-72)/2,W=a.default.create({container:{flex:1,backgroundColor:"#FFFFFF"},header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:24,paddingTop:"ios"===g.default.OS?60:40},headerContent:{flex:1},welcomeText:{fontSize:16,color:"#666666",marginBottom:4},userName:{fontSize:24,fontWeight:"700",color:"#333333"},notificationButton:{width:40,height:40,borderRadius:20,backgroundColor:"#F5F5F5",alignItems:"center",justifyContent:"center"},notificationBadge:{position:"absolute",top:10,right:10,width:8,height:8,borderRadius:4,backgroundColor:"#FF3B30"},pregnancyCard:{margin:24,borderRadius:16,overflow:"hidden"},pregnancyGradient:{flexDirection:"row",padding:24},pregnancyInfo:{flex:1},weekText:{fontSize:28,fontWeight:"700",color:"#FFFFFF",marginBottom:4},daysText:{fontSize:16,color:"#FFFFFF",opacity:.8,marginBottom:8},babySize:{fontSize:14,color:"#FFFFFF",opacity:.8},babySizeImage:{width:80,height:80},quickActions:{padding:24},sectionHeader:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:16},sectionTitle:{fontSize:20,fontWeight:"700",color:"#333333"},seeAllText:{fontSize:14,fontWeight:"600",color:"#6B4EFF"},actionsGrid:{flexDirection:"row",flexWrap:"wrap",marginHorizontal:-6,marginTop:16},actionCard:L({width:E,backgroundColor:"#FFFFFF",borderRadius:16,padding:16,margin:6},g.default.select({ios:{shadowColor:"#000000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:8},android:{elevation:4}})),actionIcon:{width:48,height:48,borderRadius:24,alignItems:"center",justifyContent:"center",marginBottom:12},actionText:{fontSize:14,fontWeight:"600",color:"#333333"},tasks:{padding:24},tasksList:L({backgroundColor:"#FFFFFF",borderRadius:16},g.default.select({ios:{shadowColor:"#000000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:8},android:{elevation:4}})),taskItem:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:16,borderBottomWidth:1,borderBottomColor:"#F5F5F5"},taskLeft:{flexDirection:"row",alignItems:"center"},taskContent:{marginLeft:12},taskTitle:{fontSize:16,fontWeight:"500",color:"#333333",marginBottom:4},taskTime:{fontSize:14,color:"#666666"},appointments:{padding:24,paddingBottom:32},appointmentCard:L({flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"#FFFFFF",borderRadius:16,padding:16},g.default.select({ios:{shadowColor:"#000000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:8},android:{elevation:4}})),appointmentLeft:{flexDirection:"row",alignItems:"center"},doctorIcon:{width:48,height:48,borderRadius:24,alignItems:"center",justifyContent:"center",marginRight:12},appointmentInfo:{flex:1},doctorName:{fontSize:16,fontWeight:"600",color:"#333333",marginBottom:4},appointmentType:{fontSize:14,color:"#6B4EFF",marginBottom:4},appointmentDate:{fontSize:14,color:"#666666"}});const A=function(){return(0,p.jsx)(w.default,{style:W.container,children:(0,p.jsxs)(k.default,{showsVerticalScrollIndicator:!1,children:[(0,p.jsxs)(r.default,{style:W.header,children:[(0,p.jsxs)(r.default,{style:W.headerContent,children:[(0,p.jsx)(i.default,{style:W.welcomeText,children:"Welcome Back"}),(0,p.jsx)(i.default,{style:W.userName,children:"Sarah Johnson"})]}),(0,p.jsxs)(h.default,{style:W.notificationButton,children:[(0,p.jsx)(c.default,{name:"bell-outline",size:24,color:"#333333"}),(0,p.jsx)(r.default,{style:W.notificationBadge})]})]}),(0,p.jsx)(r.default,{style:W.pregnancyCard,children:(0,p.jsxs)(y.LinearGradient,{colors:["#6B4EFF","#9C27B0"],start:{x:0,y:0},end:{x:1,y:0},style:W.pregnancyGradient,children:[(0,p.jsxs)(r.default,{style:W.pregnancyInfo,children:[(0,p.jsx)(i.default,{style:W.weekText,children:"Week 12"}),(0,p.jsx)(i.default,{style:W.daysText,children:"3 days"}),(0,p.jsx)(i.default,{style:W.babySize,children:"Baby is the size of a lime"})]}),(0,p.jsx)(x.default,{source:n(6213),style:W.babySizeImage})]})}),(0,p.jsxs)(r.default,{style:W.quickActions,children:[(0,p.jsx)(i.default,{style:W.sectionTitle,children:"Quick Actions"}),(0,p.jsxs)(r.default,{style:W.actionsGrid,children:[(0,p.jsxs)(h.default,{style:W.actionCard,children:[(0,p.jsx)(y.LinearGradient,{colors:["#E8F5E9","#C8E6C9"],style:W.actionIcon,children:(0,p.jsx)(c.default,{name:"calendar-check",size:24,color:"#4CAF50"})}),(0,p.jsx)(i.default,{style:W.actionText,children:"Appointments"})]}),(0,p.jsxs)(h.default,{style:W.actionCard,children:[(0,p.jsx)(y.LinearGradient,{colors:["#FFF3E0","#FFE0B2"],style:W.actionIcon,children:(0,p.jsx)(c.default,{name:"food-apple",size:24,color:"#FF9800"})}),(0,p.jsx)(i.default,{style:W.actionText,children:"Diet Plan"})]}),(0,p.jsxs)(h.default,{style:W.actionCard,children:[(0,p.jsx)(y.LinearGradient,{colors:["#E3F2FD","#BBDEFB"],style:W.actionIcon,children:(0,p.jsx)(c.default,{name:"yoga",size:24,color:"#2196F3"})}),(0,p.jsx)(i.default,{style:W.actionText,children:"Exercise"})]}),(0,p.jsxs)(h.default,{style:W.actionCard,children:[(0,p.jsx)(y.LinearGradient,{colors:["#F3E5F5","#E1BEE7"],style:W.actionIcon,children:(0,p.jsx)(c.default,{name:"pill",size:24,color:"#9C27B0"})}),(0,p.jsx)(i.default,{style:W.actionText,children:"Medicine"})]})]})]}),(0,p.jsxs)(r.default,{style:W.tasks,children:[(0,p.jsxs)(r.default,{style:W.sectionHeader,children:[(0,p.jsx)(i.default,{style:W.sectionTitle,children:"Today's Tasks"}),(0,p.jsx)(h.default,{children:(0,p.jsx)(i.default,{style:W.seeAllText,children:"See All"})})]}),(0,p.jsxs)(r.default,{style:W.tasksList,children:[(0,p.jsxs)(h.default,{style:W.taskItem,children:[(0,p.jsxs)(r.default,{style:W.taskLeft,children:[(0,p.jsx)(c.default,{name:"checkbox-blank-circle-outline",size:24,color:"#666666"}),(0,p.jsxs)(r.default,{style:W.taskContent,children:[(0,p.jsx)(i.default,{style:W.taskTitle,children:"Take prenatal vitamins"}),(0,p.jsx)(i.default,{style:W.taskTime,children:"8:00 AM"})]})]}),(0,p.jsx)(c.default,{name:"chevron-right",size:24,color:"#666666"})]}),(0,p.jsxs)(h.default,{style:W.taskItem,children:[(0,p.jsxs)(r.default,{style:W.taskLeft,children:[(0,p.jsx)(c.default,{name:"checkbox-blank-circle-outline",size:24,color:"#666666"}),(0,p.jsxs)(r.default,{style:W.taskContent,children:[(0,p.jsx)(i.default,{style:W.taskTitle,children:"Drink 8 glasses of water"}),(0,p.jsx)(i.default,{style:W.taskTime,children:"All day"})]})]}),(0,p.jsx)(c.default,{name:"chevron-right",size:24,color:"#666666"})]})]})]}),(0,p.jsxs)(r.default,{style:W.appointments,children:[(0,p.jsxs)(r.default,{style:W.sectionHeader,children:[(0,p.jsx)(i.default,{style:W.sectionTitle,children:"Upcoming Appointments"}),(0,p.jsx)(h.default,{children:(0,p.jsx)(i.default,{style:W.seeAllText,children:"See All"})})]}),(0,p.jsxs)(h.default,{style:W.appointmentCard,children:[(0,p.jsxs)(r.default,{style:W.appointmentLeft,children:[(0,p.jsx)(y.LinearGradient,{colors:["#6B4EFF","#9C27B0"],style:W.doctorIcon,children:(0,p.jsx)(c.default,{name:"doctor",size:24,color:"#FFFFFF"})}),(0,p.jsxs)(r.default,{style:W.appointmentInfo,children:[(0,p.jsx)(i.default,{style:W.doctorName,children:"Dr. Sarah Wilson"}),(0,p.jsx)(i.default,{style:W.appointmentType,children:"Regular Checkup"}),(0,p.jsx)(i.default,{style:W.appointmentDate,children:"Tomorrow, 10:00 AM"})]})]}),(0,p.jsx)(c.default,{name:"chevron-right",size:24,color:"#666666"})]})]})]})})};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var M=a.default.create({container:{flex:1,backgroundColor:"#FFFFFF"},header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:20,paddingTop:"ios"===g.default.OS?60:40},headerContent:{flex:1},title:{fontSize:32,fontWeight:"700",color:"#333333",marginBottom:4},subtitle:{fontSize:16,color:"#666666"},filterButton:{width:40,height:40,borderRadius:20,backgroundColor:"#F5F5F5",alignItems:"center",justifyContent:"center"},content:{flex:1},searchContainer:{padding:20,paddingTop:0},searchBox:{flexDirection:"row",alignItems:"center",backgroundColor:"#F5F5F5",borderRadius:12,padding:12},searchPlaceholder:{marginLeft:12,fontSize:16,color:"#666666"},categories:{marginBottom:20},categoriesContent:{paddingHorizontal:20},categoryButton:{paddingHorizontal:20,paddingVertical:8,borderRadius:20,backgroundColor:"#F5F5F5",marginRight:12},activeCategoryButton:{backgroundColor:"#6B4EFF"},categoryText:{fontSize:14,color:"#666666",fontWeight:"500"},activeCategoryText:{color:"#FFFFFF"},coursesList:{padding:20,paddingTop:0},courseCard:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,R.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({backgroundColor:"#FFFFFF",borderRadius:12,marginBottom:20,overflow:"hidden"},g.default.select({ios:{shadowColor:"#000000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:4},android:{elevation:3}})),courseImage:{width:"100%",height:160,resizeMode:"cover"},courseContent:{padding:16},courseTitle:{fontSize:18,fontWeight:"600",color:"#333333",marginBottom:4},courseDescription:{fontSize:14,color:"#666666",marginBottom:12},courseMetrics:{flexDirection:"row",alignItems:"center"},metric:{flexDirection:"row",alignItems:"center",marginRight:16},metricText:{fontSize:14,color:"#666666",marginLeft:4}});const G=function(){var e=[{title:"First Trimester Guide",description:"Essential information for weeks 1-12",image:n(327),lessons:8,duration:"2h 30m"},{title:"Nutrition Essentials",description:"Healthy eating during pregnancy",image:n(1763),lessons:6,duration:"1h 45m"},{title:"Prenatal Exercise",description:"Safe workouts for expecting mothers",image:n(6557),lessons:10,duration:"3h 15m"},{title:"Birth Preparation",description:"Get ready for labor and delivery",image:n(7716),lessons:12,duration:"4h 00m"}];return(0,p.jsxs)(w.default,{style:M.container,children:[(0,p.jsxs)(r.default,{style:M.header,children:[(0,p.jsxs)(r.default,{style:M.headerContent,children:[(0,p.jsx)(i.default,{style:M.title,children:"Courses"}),(0,p.jsx)(i.default,{style:M.subtitle,children:"Learn from experts"})]}),(0,p.jsx)(h.default,{style:M.filterButton,children:(0,p.jsx)(c.default,{name:"filter-variant",size:24,color:"#333333"})})]}),(0,p.jsxs)(k.default,{style:M.content,showsVerticalScrollIndicator:!1,children:[(0,p.jsx)(r.default,{style:M.searchContainer,children:(0,p.jsxs)(r.default,{style:M.searchBox,children:[(0,p.jsx)(c.default,{name:"magnify",size:24,color:"#666666"}),(0,p.jsx)(i.default,{style:M.searchPlaceholder,children:"Search courses..."})]})}),(0,p.jsx)(r.default,{style:M.categories,children:(0,p.jsxs)(k.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:M.categoriesContent,children:[(0,p.jsx)(h.default,{style:[M.categoryButton,M.activeCategoryButton],children:(0,p.jsx)(i.default,{style:[M.categoryText,M.activeCategoryText],children:"All"})}),(0,p.jsx)(h.default,{style:M.categoryButton,children:(0,p.jsx)(i.default,{style:M.categoryText,children:"Trimester 1"})}),(0,p.jsx)(h.default,{style:M.categoryButton,children:(0,p.jsx)(i.default,{style:M.categoryText,children:"Trimester 2"})}),(0,p.jsx)(h.default,{style:M.categoryButton,children:(0,p.jsx)(i.default,{style:M.categoryText,children:"Trimester 3"})})]})}),(0,p.jsx)(r.default,{style:M.coursesList,children:e.map((function(e,t){return(0,p.jsxs)(h.default,{style:M.courseCard,children:[(0,p.jsx)(x.default,{source:e.image,style:M.courseImage}),(0,p.jsxs)(r.default,{style:M.courseContent,children:[(0,p.jsx)(i.default,{style:M.courseTitle,children:e.title}),(0,p.jsx)(i.default,{style:M.courseDescription,children:e.description}),(0,p.jsxs)(r.default,{style:M.courseMetrics,children:[(0,p.jsxs)(r.default,{style:M.metric,children:[(0,p.jsx)(c.default,{name:"book-open-variant",size:16,color:"#666666"}),(0,p.jsxs)(i.default,{style:M.metricText,children:[e.lessons," lessons"]})]}),(0,p.jsxs)(r.default,{style:M.metric,children:[(0,p.jsx)(c.default,{name:"clock-outline",size:16,color:"#666666"}),(0,p.jsx)(i.default,{style:M.metricText,children:e.duration})]})]})]})]},t)}))})]})]})};var U=n(5458),N=function(e){var t=e.text,n=e.isUser;return(0,p.jsxs)(r.default,{style:[V.messageContainer,n?V.userMessage:V.aiMessage],children:[!n&&(0,p.jsx)(r.default,{style:V.avatarContainer,children:(0,p.jsx)(c.default,{name:"robot",size:20,color:"#FFFFFF"})}),(0,p.jsx)(r.default,{style:[V.messageBubble,n?V.userBubble:V.aiBubble],children:(0,p.jsx)(i.default,{style:[V.messageText,n?V.userText:V.aiText],children:t})})]})},V=a.default.create({container:{flex:1,backgroundColor:"#FFFFFF"},header:{padding:20,paddingTop:"ios"===g.default.OS?60:40,borderBottomWidth:1,borderBottomColor:"#F5F5F5"},title:{fontSize:32,fontWeight:"700",color:"#333333",marginBottom:4},subtitle:{fontSize:16,color:"#666666"},content:{flex:1},messagesContainer:{flex:1},messagesList:{padding:20},messageContainer:{flexDirection:"row",marginBottom:16,maxWidth:"80%"},userMessage:{alignSelf:"flex-end"},aiMessage:{alignSelf:"flex-start"},avatarContainer:{width:32,height:32,borderRadius:16,backgroundColor:"#6B4EFF",alignItems:"center",justifyContent:"center",marginRight:8},messageBubble:{padding:12,borderRadius:16},userBubble:{backgroundColor:"#6B4EFF",borderBottomRightRadius:4},aiBubble:{backgroundColor:"#F5F5F5",borderBottomLeftRadius:4},messageText:{fontSize:16,lineHeight:22},userText:{color:"#FFFFFF"},aiText:{color:"#333333"},inputContainer:{flexDirection:"row",alignItems:"center",padding:16,borderTopWidth:1,borderTopColor:"#F5F5F5",backgroundColor:"#FFFFFF"},input:{flex:1,backgroundColor:"#F5F5F5",borderRadius:24,paddingHorizontal:16,paddingVertical:8,marginRight:12,fontSize:16,maxHeight:100},sendButton:{width:48,height:48,borderRadius:24,backgroundColor:"#6B4EFF",alignItems:"center",justifyContent:"center"},sendButtonDisabled:{backgroundColor:"#F5F5F5"}});const _=function(){var e=(0,o.useState)(""),t=(0,C.default)(e,2),n=t[0],a=t[1],l=(0,o.useState)([{text:"Hello! I am MatternAI, your pregnancy companion. How can I help you today?",isUser:!1}]),s=(0,C.default)(l,2),d=s[0],u=s[1];return(0,p.jsxs)(w.default,{style:V.container,children:[(0,p.jsxs)(r.default,{style:V.header,children:[(0,p.jsx)(i.default,{style:V.title,children:"MatternAI"}),(0,p.jsx)(i.default,{style:V.subtitle,children:"Your 24/7 pregnancy assistant"})]}),(0,p.jsxs)(B.default,{behavior:"ios"===g.default.OS?"padding":"height",style:V.content,keyboardVerticalOffset:"ios"===g.default.OS?90:0,children:[(0,p.jsx)(k.default,{style:V.messagesContainer,contentContainerStyle:V.messagesList,showsVerticalScrollIndicator:!1,children:d.map((function(e,t){return(0,p.jsx)(N,{text:e.text,isUser:e.isUser},t)}))}),(0,p.jsxs)(r.default,{style:V.inputContainer,children:[(0,p.jsx)(S.default,{style:V.input,placeholder:"Type your message...",placeholderTextColor:"#666666",value:n,onChangeText:a,multiline:!0}),(0,p.jsx)(h.default,{style:[V.sendButton,!n.trim()&&V.sendButtonDisabled],onPress:function(){n.trim()&&(u([].concat((0,U.default)(d),[{text:n,isUser:!0}])),a(""),setTimeout((function(){u((function(e){return[].concat((0,U.default)(e),[{text:"I understand your concern. Let me help you with that...",isUser:!1}])}))}),1e3))},disabled:!n.trim(),children:(0,p.jsx)(c.default,{name:"send",size:24,color:n.trim()?"#FFFFFF":"#CCCCCC"})})]})]})]})};var q=function(e){var t=e.icon,n=e.title,o=e.subtitle,a=e.onPress;return(0,p.jsxs)(h.default,{style:J.menuItem,onPress:a,children:[(0,p.jsxs)(r.default,{style:J.menuItemLeft,children:[(0,p.jsx)(r.default,{style:J.menuIcon,children:(0,p.jsx)(c.default,{name:t,size:24,color:"#6B4EFF"})}),(0,p.jsxs)(r.default,{style:J.menuText,children:[(0,p.jsx)(i.default,{style:J.menuTitle,children:n}),(0,p.jsx)(i.default,{style:J.menuSubtitle,children:o})]})]}),(0,p.jsx)(c.default,{name:"chevron-right",size:24,color:"#666666"})]})},J=a.default.create({container:{flex:1,backgroundColor:"#FFFFFF"},header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:20,paddingTop:"ios"===g.default.OS?60:40},title:{fontSize:32,fontWeight:"700",color:"#333333"},settingsButton:{width:40,height:40,borderRadius:20,backgroundColor:"#F5F5F5",alignItems:"center",justifyContent:"center"},content:{flex:1},profileSection:{alignItems:"center",paddingVertical:20},profilePhoto:{width:100,height:100,borderRadius:50,marginBottom:16},name:{fontSize:24,fontWeight:"600",color:"#333333",marginBottom:4},email:{fontSize:16,color:"#666666"},menuSection:{paddingHorizontal:20,paddingTop:20},menuItem:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:16,borderBottomWidth:1,borderBottomColor:"#F5F5F5"},menuItemLeft:{flexDirection:"row",alignItems:"center"},menuIcon:{width:40,height:40,borderRadius:20,backgroundColor:"#F5F5F5",alignItems:"center",justifyContent:"center",marginRight:12},menuText:{flex:1},menuTitle:{fontSize:16,fontWeight:"500",color:"#333333",marginBottom:4},menuSubtitle:{fontSize:14,color:"#666666"},logoutButton:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:40,marginBottom:40,paddingVertical:12,marginHorizontal:20,borderRadius:12,backgroundColor:"#FFF1F0"},logoutText:{marginLeft:8,fontSize:16,fontWeight:"600",color:"#FF3B30"}});const Y=function(e){var t=e.navigation;return(0,p.jsxs)(w.default,{style:J.container,children:[(0,p.jsxs)(r.default,{style:J.header,children:[(0,p.jsx)(i.default,{style:J.title,children:"Profile"}),(0,p.jsx)(h.default,{style:J.settingsButton,children:(0,p.jsx)(c.default,{name:"cog",size:24,color:"#333333"})})]}),(0,p.jsxs)(k.default,{style:J.content,showsVerticalScrollIndicator:!1,children:[(0,p.jsxs)(r.default,{style:J.profileSection,children:[(0,p.jsx)(x.default,{source:n(7663),style:J.profilePhoto}),(0,p.jsx)(i.default,{style:J.name,children:"Sarah Johnson"}),(0,p.jsx)(i.default,{style:J.email,children:"sarah.johnson@email.com"})]}),(0,p.jsxs)(r.default,{style:J.menuSection,children:[(0,p.jsx)(q,{icon:"account-outline",title:"Personal Information",subtitle:"View and edit your details",onPress:function(){}}),(0,p.jsx)(q,{icon:"calendar-check",title:"Appointments",subtitle:"Manage your appointments",onPress:function(){}}),(0,p.jsx)(q,{icon:"bell-outline",title:"Notifications",subtitle:"Configure your notifications",onPress:function(){}}),(0,p.jsx)(q,{icon:"shield-check",title:"Privacy",subtitle:"Manage your privacy settings",onPress:function(){}}),(0,p.jsx)(q,{icon:"help-circle",title:"Help & Support",subtitle:"Get help with the app",onPress:function(){}}),(0,p.jsx)(q,{icon:"information",title:"About",subtitle:"Learn more about Baby+",onPress:function(){}})]}),(0,p.jsxs)(h.default,{style:J.logoutButton,onPress:function(){return t.navigate("Landing")},children:[(0,p.jsx)(c.default,{name:"logout",size:24,color:"#FF3B30"}),(0,p.jsx)(i.default,{style:J.logoutText,children:"Logout"})]})]})]})};var Q=(0,s.default)(),K=(0,d.default)(),X=function(){return(0,p.jsxs)(K.Navigator,{screenOptions:{headerShown:!1,tabBarStyle:{backgroundColor:"#FFFFFF",borderTopWidth:1,borderTopColor:"#F5F5F5",height:60,paddingBottom:8,paddingTop:8},tabBarActiveTintColor:"#6B4EFF",tabBarInactiveTintColor:"#666666",tabBarLabelStyle:{fontSize:12,fontWeight:"500"}},children:[(0,p.jsx)(K.Screen,{name:"Home",component:A,options:{tabBarIcon:function(e){var t=e.color,n=e.size;return(0,p.jsx)(c.default,{name:"home",size:n,color:t})}}}),(0,p.jsx)(K.Screen,{name:"Courses",component:G,options:{tabBarIcon:function(e){var t=e.color,n=e.size;return(0,p.jsx)(c.default,{name:"book-open-variant",size:n,color:t})}}}),(0,p.jsx)(K.Screen,{name:"MatternAI",component:_,options:{tabBarIcon:function(e){var t=e.color,n=e.size;return(0,p.jsx)(c.default,{name:"robot",size:n,color:t})},tabBarLabel:"AI Assistant"}}),(0,p.jsx)(K.Screen,{name:"Profile",component:Y,options:{tabBarIcon:function(e){var t=e.color,n=e.size;return(0,p.jsx)(c.default,{name:"account",size:n,color:t})}}})]})},Z=a.default.create({container:{flex:1,backgroundColor:"#FFFFFF"}});const $=function(){return(0,p.jsx)(u.SafeAreaProvider,{children:(0,p.jsx)(r.default,{style:Z.container,children:(0,p.jsx)(f.GestureHandlerRootView,{style:{flex:1},children:(0,p.jsx)(l.default,{fallback:(0,p.jsx)(i.default,{children:"Loading..."}),children:(0,p.jsxs)(Q.Navigator,{screenOptions:{headerShown:!1,contentStyle:{backgroundColor:"#FFFFFF"}},children:[(0,p.jsx)(Q.Screen,{name:"Landing",component:b}),(0,p.jsx)(Q.Screen,{name:"Login",component:I}),(0,p.jsx)(Q.Screen,{name:"Register",component:P}),(0,p.jsx)(Q.Screen,{name:"MainTabs",component:X})]})})})})})}},6213:e=>{e.exports="data:image/png;base64,Cg=="},7716:e=>{e.exports="data:image/jpeg;base64,Cg=="},6557:e=>{e.exports="data:image/jpeg;base64,Cg=="},327:e=>{e.exports="data:image/jpeg;base64,Cg=="},8499:e=>{e.exports="data:image/png;base64,Cg=="},1763:e=>{e.exports="data:image/jpeg;base64,Cg=="},7663:e=>{e.exports="data:image/jpeg;base64,Cg=="}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,r,i]=e[c],l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,n.d(i,a),i}})(),n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/baby-plus-mockup/",(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[a,l,s]=o,d=0;if(a.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(t&&t(o);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[130],(()=>n(5036)));o=n.O(o)})();
//# sourceMappingURL=main.60adc50e.js.map