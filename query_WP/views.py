from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import pymysql

import datetime as datetime
import json
import requests

"""不理解这个怎样实现的，需要学习loginview方法"""
class LoginView(APIView):
    def post(self,request,*args,**kwargs):
        # print(request.data)
        param = request.data
        print(param)

        if param.get("code") == "area":
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
       
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = 'SELECT DISTINCT area FROM `originalparameter`'

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
            finally:
                list1 = []
                # list2 = []
                for i in result:
                    # print(i)
                    list1.append(list(i))
                    print(list1)
                    str_json1 = sum(list1,[])
                    print(str_json1)
                str_json = json.dumps(str_json1,ensure_ascii=False)
            backuserinfo = (str_json)
            return Response({backuserinfo})

        elif param.get("code") == "subArea":
            area = param['area']
            value = ("'" + str(area) + "'")
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
           
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """SELECT DISTINCT subArea FROM `originalparameter` where originalparameter.area = %s"""%(value)

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
            finally:
                list1 = []
                # list2 = []
                for i in result:
                    # print(i)
                    list1.append(list(i))
                    print(list1)
                    str_json1 = sum(list1,[])
                    print(str_json1)
                str_json = json.dumps(str_json1,ensure_ascii=False)
            backuserinfo = (str_json)
            return Response({backuserinfo})

        elif param.get("code") == "gun":
            area = param['area']
            subArea = param['subArea']
            value = ("'" + str(area) + "'")
            value1 = ("'" + str(subArea) + "'")
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
                  
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """SELECT DISTINCT gun FROM `originalparameter` where originalparameter.area = %s and originalparameter.subArea = %s ORDER BY originalparameter.gun asc"""%(value,value1)

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
            finally:
                list1 = []
                # list2 = []
                for i in result:
                    # print(i)
                    list1.append(list(i))
                    print(list1)
                    str_json1 = sum(list1,[])
                    print(str_json1)
                str_json = json.dumps(str_json1,ensure_ascii=False)
            backuserinfo = (str_json)
            return Response({backuserinfo})

        elif param.get("code") == "carType":
            area = param['area']
            subArea = param['subArea']
            gun = param['gun']
            value = ("'" + str(area) + "'")
            value1 = ("'" + str(subArea) + "'")
            value2 = ("'" + str(gun) + "'")
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
          
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """SELECT DISTINCT carType FROM `originalparameter` where originalparameter.area = %s and originalparameter.subArea = %s and originalparameter.gun = %s"""%(value,value1,value2)

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
            finally:
                list1 = []
                # list2 = []
                for i in result:
                    # print(i)
                    list1.append(list(i))
                    print(list1)
                    str_json1 = sum(list1,[])
                    print(str_json1)
                str_json = json.dumps(str_json1,ensure_ascii=False)
            backuserinfo = (str_json)
            return Response({backuserinfo})
        elif param.get("code") == "weldSpotProgram":
            area = param['area']
            subArea = param['subArea']
            gun = param['gun']
            carType = param['carType']
            value = ("'" + str(area) + "'")
            value1 = ("'" + str(subArea) + "'")
            value2 = ("'" + str(gun) + "'")
            value3 = ("'" + str(carType) + "'")
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
            
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """SELECT DISTINCT weldSpotProgram FROM `originalparameter` where originalparameter.area = %s and originalparameter.subArea = %s AND originalparameter.gun = %s AND originalparameter.carType = %s ORDER BY originalparameter.weldSpotProgram"""%(value,value1,value2,value3)

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
            finally:
                list1 = []
                # list2 = []
                for i in result:
                    # print(i)
                    list1.append(list(i))
                    print(list1)
                    str_json1 = sum(list1,[])
                    print(str_json1)
                str_json = json.dumps(str_json1,ensure_ascii=False)
            backuserinfo = (str_json)
            return Response({backuserinfo})
        elif param.get("code") == "weldParameter":
            area = param['area']
            subArea = param['subArea']
            gun = param['gun']
            carType = param['carType']
            weldSpotProgram = param['weldSpotProgram']
            value = ("'" + str(area) + "'")
            value1 = ("'" + str(subArea) + "'")
            value2 = ("'" + str(gun) + "'")
            value3 = ("'" + str(carType) + "'")
            value4 = ("'" + str(weldSpotProgram) + "'")
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
            
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """SELECT id, area, subArea, gun, carType, weldSpotNumber, weldSpotProgram, sheet1, sheet2, IFNULL(sheet3,0), IFNULL(sheet4,0), preloadingTime, preheatingTime, preheatingCurrent, coolingTime, risslopeTime, startCurrent, endCurrent, mainWeldCurrent, mainWeldTime, downslopeTime, startCurrent1, endCurrent1, impulse, intervalTime, holdTime,weldPressure, dressingPoints, dressingNumbers FROM `originalparameter` where originalparameter.area = %s and originalparameter.subArea = %s AND originalparameter.gun = %s AND originalparameter.carType = %s  and originalparameter.weldSpotProgram = %s"""%(value,value1,value2,value3,value4)

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
            finally:
                list1 = []
                # list2 = []
                for i in result:
                    # print(i)
                    list1.append(list(i))
                    print(list1)

                keys = ['id', 'area', 'subArea', 'gun', 'carType', 'weldSpotNumber', 'weldSpotProgram', 'sheet1', 'sheet2', 'sheet3', 'sheet4', 'preloadingTime', 'preheatingTime', 'preheatingCurrent', 'coolingTime', 'risslopeTime', 'startCurrent', 'endCurrent', 'mainWeldTime', 'mainWeldCurrent', 'downslopeTime', 'startCurrent1', 'endCurrent1', 'impulse', 'intervalTime', 'holdTime','weldPressure', 'dressingPoints', 'dressingNumbers']
                list_json = [dict(zip(keys, item)) for item in list1]
                str_json = json.dumps(list_json, indent=2, ensure_ascii=False)
                backuserinfo = json.loads(str_json)
            return Response(backuserinfo)

        elif param.get("code") == "paramshow":
            gun = param['gun']
            carType = param['carType']
            value2 = ("'" + str(gun) + "'")
            value3 = ("'" + str(carType) + "'")
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
        
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """SELECT weldSpotNumber, weldSpotProgram, sheet1, sheet2, IFNULL(sheet3,0), IFNULL(sheet4,0), preloadingTime, preheatingTime, preheatingCurrent, coolingTime, risslopeTime, startCurrent, endCurrent, mainWeldCurrent, mainWeldTime, downslopeTime, startCurrent1, endCurrent1, impulse, intervalTime, holdTime,weldPressure, dressingPoints, dressingNumbers FROM `originalparameter` where originalparameter.gun = %s AND originalparameter.carType = %s"""%(value2,value3)

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
            finally:
                list1 = []
            for i in result:
                j = list(i)  # 把元组类型全部变成列表类型
                list1.append(j)
            print(list1)
            # 将列表转化为字典返回
            keys = ['weldSpotNumber', 'weldSpotProgram', 'sheet1', 'sheet2', 'sheet3', 'sheet4', 'preloadingTime', 'preheatingTime', 'preheatingCurrent', 'coolingTime', 'risslopeTime', 'startCurrent', 'endCurrent', 'mainWeldTime', 'mainWeldCurrent', 'downslopeTime', 'startCurrent1', 'endCurrent1', 'impulse', 'intervalTime', 'holdTime','weldPressure', 'dressingPoints', 'dressingNumbers']
            list_json = [dict(zip(keys, item)) for item in list1]
            str_json = json.dumps(list_json, indent=2, ensure_ascii=False)
            print(str_json)
            return Response(str_json)
        elif param.get("code") == "dressdata":
            area = param['area']
            subArea = param['subArea']
            value2 = ("'" + str(area) + "'")
            value3 = ("'" + str(subArea) + "'")
            try:
            # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                # mysql 服务端ip
               
                )
            # 3创建游标对象
                cur = connc.cursor()

            # 4 编写SQL语句

                sql = """SELECT t1.product,t1.gun
from
(SELECT dressingNumbers,dressingPoints,gun,(dressingNumbers*dressingPoints) AS product
from originalparameter  where area = %s and subArea = %s and dressingNumbers != 0
GROUP BY gun)t1
ORDER BY t1.product DESC
"""%(value2,value3)

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
            finally:
                list1 = []
            for i in result:
                j = list(i)  # 把元组类型全部变成列表类型
                list1.append(j)
            print(list1)
            # 将列表转化为字典返回
            keys = ['product', 'gun']
            list_json = [dict(zip(keys, item)) for item in list1]
            str_json = json.dumps(list_json, indent=2, ensure_ascii=False)
            print(str_json)
            return Response(str_json)
