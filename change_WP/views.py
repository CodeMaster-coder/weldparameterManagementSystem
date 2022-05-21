from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import pymysql

import datetime as datetime
import json
import requests

class LoginView(APIView):
    def post(self,request,*args,**kwargs):
        # print(request.data)
        param = request.data

        beforeparam = eval(param.get('beforeParam'))
        print(beforeparam)
        afterparam = eval(param.get('afterParam'))
        id = eval(str(beforeparam['id']))
        print(type(id))
        modifyStatus1 = "'" + '更改前' + "'"
        area = ("'" + str(beforeparam['area'])+ "'")
        subArea = ("'" + str(beforeparam['subArea'])+ "'")
        gun = ("'" + str(beforeparam['gun'])+ "'")
        carType = ("'" + str(beforeparam['carType'])+ "'")
        weldSpotNumber = ("'" + str(beforeparam['weldSpotNumber'])+ "'")
        weldSpotProgram = ("'" + str(beforeparam['weldSpotProgram'])+ "'")
        sheet1 = ("'" + str(beforeparam['sheet1'])+ "'")
        sheet2 = ("'" + str(beforeparam['sheet2'])+ "'")
        sheet3 = ("'" + str(beforeparam['sheet3'])+ "'")
        sheet4 = ("'" + str(beforeparam['sheet4'])+ "'")
        preloadingTime = ("'" + str(beforeparam['preloadingTime'])+ "'")
        preheatingTime = ("'" + str(beforeparam['preheatingTime'])+ "'")
        preheatingCurrent = ("'" + str(beforeparam['preheatingCurrent'])+ "'")
        coolingTime = ("'" + str(beforeparam['coolingTime'])+ "'")
        risslopeTime = ("'" + str(beforeparam['risslopeTime'])+ "'")
        startCurrent = ("'" + str(beforeparam['startCurrent'])+ "'")
        endCurrent = ("'" + str(beforeparam['endCurrent'])+ "'")
        mainWeldCurrent = ("'" + str(beforeparam['mainWeldCurrent'])+ "'")
        mainWeldTime = ("'" + str(beforeparam['mainWeldTime'])+ "'")
        downslopeTime = ("'" + str(beforeparam['downslopeTime'])+ "'")
        startCurrent1 = ("'" + str(beforeparam['startCurrent1'])+ "'")
        endCurrent1 = ("'" + str(beforeparam['endCurrent1'])+ "'")
        impulse = ("'" + str(beforeparam['impulse'])+ "'")
        intervalTime = ("'" + str(beforeparam['intervalTime'])+ "'")
        holdTime = ("'" + str(beforeparam['holdTime'])+ "'")
        weldPressure = ("'" + str(beforeparam['weldPressure'])+ "'")
        dressingPoints = ("'" + str(beforeparam['dressingPoints'])+ "'")
        dressingNumbers = ("'" + str(beforeparam['dressingNumbers'])+ "'")
        modifyReason = ("'" + str(param.get('modifyReason'))+ "'")
        modifyBody = ("'" + str(param.get('modifyBody')) + "'")
        modifyTime = ("'" + str(datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S"))+ "'")
        metalgraphyCheck1 = "'" + 'yes' + "'"
        metalgraphyCheckTime = ("'" + str(datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S"))+ "'")
        amodifyStatus1 = "'" + '更改后' + "'"
        aarea = ("'" + str(afterparam['area'])+ "'")
        asubArea = ("'" + str(afterparam['subArea'])+ "'")
        agun = ("'" + str(afterparam['gun'])+ "'")
        acarType = ("'" + str(afterparam['carType'])+ "'")
        aweldSpotNumber = ("'" + str(afterparam['weldSpotNumber'])+ "'")
        aweldSpotProgram = ("'" + str(afterparam['weldSpotProgram'])+ "'")
        asheet1 = ("'" + str(afterparam['sheet1'])+ "'")
        asheet2 = ("'" + str(afterparam['sheet2'])+ "'")
        asheet3 = ("'" + str(afterparam['sheet3'])+ "'")
        asheet4 = ("'" + str(afterparam['sheet4'])+ "'")
        apreloadingTime = ("'" + str(afterparam['preloadingTime'])+ "'")
        apreheatingTime = ("'" + str(afterparam['preheatingTime'])+ "'")
        apreheatingCurrent = ("'" + str(afterparam['preheatingCurrent'])+ "'")
        acoolingTime = ("'" + str(afterparam['coolingTime'])+ "'")
        arisslopeTime = ("'" + str(afterparam['risslopeTime'])+ "'")
        astartCurrent = ("'" + str(afterparam['startCurrent'])+ "'")
        aendCurrent = ("'" + str(afterparam['endCurrent'])+ "'")
        amainWeldCurrent = ("'" + str(afterparam['mainWeldCurrent'])+ "'")
        amainWeldTime = ("'" + str(afterparam['mainWeldTime'])+ "'")
        adownslopeTime = ("'" + str(afterparam['downslopeTime'])+ "'")
        astartCurrent1 = ("'" + str(afterparam['startCurrent1'])+ "'")
        aendCurrent1 = ("'" + str(afterparam['endCurrent1'])+ "'")
        aimpulse = ("'" + str(afterparam['impulse'])+ "'")
        aintervalTime = ("'" + str(afterparam['intervalTime'])+ "'")
        aholdTime = ("'" + str(afterparam['holdTime'])+ "'")
        aweldPressure = ("'" + str(afterparam['weldPressure'])+ "'")
        adressingPoints = ("'" + str(afterparam['dressingPoints'])+ "'")
        adressingNumbers = ("'" + str(afterparam['dressingNumbers'])+ "'")
        amodifyReason = ("'" + str(param.get('modifyReason'))+ "'")
        amodifyBody = ("'" + str(param.get('modifyBody')) + "'")
        amodifyTime = ("'" + str(datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S"))+ "'")
        ametalgraphyCheck1 = "'" + 'yes' + "'"
        ametalgraphyCheckTime = ("'" + str(datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S"))+ "'")

        if param.get("modifyReason") == "优化金相":

            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
                 
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """INSERT INTO modifyparameter(area,modifyStatus,subArea,gun,carType,weldSpotNumber,weldSpotProgram,sheet1,sheet2,sheet3,sheet4,preloadingTime,preheatingTime,preheatingCurrent,coolingTime,risslopeTime,startCurrent,endCurrent,mainWeldCurrent,mainWeldTime,downslopeTime,startCurrent1,endCurrent1,impulse,intervalTime,holdTime,weldPressure,dressingPoints,dressingNumbers,modifyReason,modifyBody,modifyTime,metalgraphyCheck,metalgraphyCheckBody,metalgraphyCheckTime)
                 values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s),(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""%(area,modifyStatus1,subArea,gun,carType,weldSpotNumber,weldSpotProgram,sheet1,sheet2,sheet3,sheet4,preloadingTime,preheatingTime,preheatingCurrent,coolingTime,risslopeTime,startCurrent,endCurrent,mainWeldCurrent,mainWeldTime,downslopeTime,startCurrent1,endCurrent1,impulse,intervalTime,holdTime,weldPressure,dressingPoints,dressingNumbers,modifyReason,modifyBody,modifyTime,metalgraphyCheck1,modifyBody,metalgraphyCheckTime,aarea,amodifyStatus1,asubArea,agun,acarType,aweldSpotNumber,aweldSpotProgram,asheet1,asheet2,asheet3,asheet4,apreloadingTime,apreheatingTime,apreheatingCurrent,acoolingTime,arisslopeTime,astartCurrent,aendCurrent,amainWeldCurrent,amainWeldTime,adownslopeTime,astartCurrent1 ,aendCurrent1,aimpulse,aintervalTime,aholdTime,aweldPressure,adressingPoints,adressingNumbers,amodifyReason,amodifyBody,amodifyTime,ametalgraphyCheck1,amodifyBody,ametalgraphyCheckTime)

            # 5 使用游标对象去调用SQL
                cur.execute(sql)
                result = cur.fetchall()
                print(result)
            # 6 提交操作
                connc.commit()

            # 7关闭游标对象
                cur.close()
            # 8 关闭连接
                connc.close()

            # 2.连接mysql数据库的服务器


                connc = pymysql.connect(
                # mysql 服务端ip
                
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句
                sql = """UPDATE originalparameter set preloadingTime = %s,preheatingTime = %s,preheatingCurrent = %s,coolingTime = %s,risslopeTime = %s,startCurrent = %s,endCurrent = %s,mainWeldCurrent = %s,mainWeldTime = %s,downslopeTime = %s,startCurrent1 = %s,endCurrent1 = %s,impulse = %s,intervalTime = %s,holdTime = %s,weldPressure = %s,dressingPoints = %s,dressingNumbers = %s
                 WHERE id = %s""" %(apreloadingTime,apreheatingTime,apreheatingCurrent,acoolingTime,arisslopeTime,astartCurrent,aendCurrent,amainWeldCurrent,amainWeldTime,adownslopeTime,astartCurrent1,aendCurrent1,aimpulse,aintervalTime,aholdTime,aweldPressure,adressingPoints,adressingNumbers,id)
                # add_data = [model[n], int(modelNum[n]), time]
                # 5 使用游标对象去调用SQL
                cur.execute(sql)

            # 6 提交操作
                connc.commit()

            # 7关闭游标对象
                cur.close()

            except Exception as e:
                print(e)

            return Response({"status": True})
        elif param.get("modifyReason") == "优化修磨":
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
                 
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """UPDATE originalparameter set dressingPoints = %s,dressingNumbers = %s
                 WHERE gun = %s""" %(adressingPoints,adressingNumbers,gun)

            # 5 使用游标对象去调用SQL
                cur.execute(sql)
                result = cur.fetchall()
                print(result)
            # 6 提交操作
                connc.commit()

            # 7关闭游标对象
                cur.close()
            # 8 关闭连接
                connc.close()
            except Exception as e:
                print(e)

            return Response({"status": True})
        else:
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
                   
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """INSERT INTO modifyparameter(area,modifyStatus,subArea,gun,carType,weldSpotNumber,weldSpotProgram,sheet1,sheet2,sheet3,sheet4,preloadingTime,preheatingTime,preheatingCurrent,coolingTime,risslopeTime,startCurrent,endCurrent,mainWeldCurrent,mainWeldTime,downslopeTime,startCurrent1,endCurrent1,impulse,intervalTime,holdTime,weldPressure,dressingPoints,dressingNumbers,modifyReason,modifyBody,modifyTime)
                 values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s),(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""%(area,modifyStatus1,subArea,gun,carType,weldSpotNumber,weldSpotProgram,sheet1,sheet2,sheet3,sheet4,preloadingTime,preheatingTime,preheatingCurrent,coolingTime,risslopeTime,startCurrent,endCurrent,mainWeldCurrent,mainWeldTime,downslopeTime,startCurrent1,endCurrent1,impulse,intervalTime,holdTime,weldPressure,dressingPoints,dressingNumbers,modifyReason,modifyBody,modifyTime,aarea,amodifyStatus1,asubArea,agun,acarType,aweldSpotNumber,aweldSpotProgram,asheet1,asheet2,asheet3,asheet4,apreloadingTime,apreheatingTime,apreheatingCurrent,acoolingTime,arisslopeTime,astartCurrent,aendCurrent,amainWeldCurrent,amainWeldTime,adownslopeTime,astartCurrent1 ,aendCurrent1,aimpulse,aintervalTime,aholdTime,aweldPressure,adressingPoints,adressingNumbers,amodifyReason,amodifyBody,amodifyTime)

            # 5 使用游标对象去调用SQL
                cur.execute(sql)
                result = cur.fetchall()
                print(result)
            # 6 提交操作
                connc.commit()

            # 7关闭游标对象
                cur.close()
            # 8 关闭连接
                connc.close()

            # 2.连接mysql数据库的服务器


                connc = pymysql.connect(
                # mysql 服务端ip
               
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句
                sql = """UPDATE originalparameter set preloadingTime = %s,preheatingTime = %s,preheatingCurrent = %s,coolingTime = %s,risslopeTime = %s,startCurrent = %s,endCurrent = %s,mainWeldCurrent = %s,mainWeldTime = %s,downslopeTime = %s,startCurrent1 = %s,endCurrent1 = %s,impulse = %s,intervalTime = %s,holdTime = %s,weldPressure = %s,dressingPoints = %s,dressingNumbers = %s
                 WHERE id = %s""" %(apreloadingTime,apreheatingTime,apreheatingCurrent,acoolingTime,arisslopeTime,astartCurrent,aendCurrent,amainWeldCurrent,amainWeldTime,adownslopeTime,astartCurrent1,aendCurrent1,aimpulse,aintervalTime,aholdTime,aweldPressure,adressingPoints,adressingNumbers,id)
                # add_data = [model[n], int(modelNum[n]), time]
                # 5 使用游标对象去调用SQL
                cur.execute(sql)

            # 6 提交操作
                connc.commit()

            # 7关闭游标对象
                cur.close()

            except Exception as e:
                print(e)

            return Response({"status": True})