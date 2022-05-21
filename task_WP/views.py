from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
import pymysql
import datetime as datetime
import json

"""不理解这个怎样实现的，需要学习loginview方法"""
class LoginView(APIView):
    def post(self,request,*args,**kwargs):

        a = request.data
        print(a)
        if a['code'] == 'spot':
            print('任务分配')

            """连接数据库查询所有QRK名称"""
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
          
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = """SELECT employeeName FROM userinfo WHERE userArea = 'QRK' ORDER BY employeeName;"""
            # 5 使用游标对象去调用SQL
            cur.execute(sql)
            # 6 提交操作
            result = cur.fetchall()
            print(result)
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            """数据处理"""
            # 将元组转为列表
            QRKname = []
            for i in result:
                j = list(i)[0]  # 把元组类型全部变成列表类型
                QRKname.append(j)  # 所有QRK人员
            print(QRKname)

            """连接数据库查询，为空的工段"""
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
             
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = """SELECT 
            modifyStatus, area, count(area) as counts
        FROM
            modifyparameter
        WHERE
            odinaryCheck is Null 
        AND modifyStatus = '更改后'
        GROUP BY area;"""
            # 5 使用游标对象去调用SQL
            cur.execute(sql)
            # 6 提交操作
            result = cur.fetchall()
            print(result)
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            # 将元组转化为字典
            list2 = []
            for i in result:
                j = list(i)  # 把元组类型全部变成列表类型
                list2.append(j)
            print(list2)
            # 将列表转化为字典返回
            keys = ['modifyStatus', 'area', 'count']
            list_json = [dict(zip(keys, item)) for item in list2]
            str_json = json.dumps(list_json, indent=2, ensure_ascii=False)
            print(str_json)
            dict1 = {'value': str_json}
            dict2 = {'employeeName': QRKname}
            dict3 = dict(dict1, **dict2)
            return Response(dict3)

        if a['code'] == 'assgin':
            print('权限更改')
            """连接数据库查询"""
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
            
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = """
            UPDATE modifyparameter 
        SET odinaryCheckBody = '{CheckBody}'
        WHERE
            odinaryCheck is Null 
        AND area = '{area}'
        """
            sql1 = sql.format(CheckBody=a['odinaryCheckBody'], area=a['area'])
            # 5 使用游标对象去调用SQL
            cur.execute(sql1)
            # 6 提交操作
            connc.commit()
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()

            return Response({"status": True})