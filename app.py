# -*- coding: utf-8 -*-
"""
Created on Thu Feb 27 14:49:34 2020

@author: ABDEDDAIM Omar
# -*- coding: utf-8 -*-
"""


import random
import codecs
import re
from collections import Counter
import numpy as np
from nltk.tokenize import RegexpTokenizer
from sklearn.svm import LinearSVC
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
import matplotlib.pyplot as plt
import pandas as pd
import json
import xmltodict
from pandas.io.json import json_normalize
from es_pandas import es_pandas

################################################################
dataset = pd.read_csv("test300.csv")
dataset = dataset.drop(columns=['Unnamed: 0'])

X = dataset.iloc[:, [2, 4, 7, 9, 11, 13,
                     15, 16, 17, 18, 19, 21, 22, 24]].values
y = dataset.iloc[:, 28].values

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=0)
# Feature Scaling
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)
# Fitting Random Forest Classification to the Training set
classifier = RandomForestClassifier(n_estimators=50,
                                    max_depth=15,
                                    min_samples_leaf=2,
                                    criterion='entropy', random_state=0)
classifier.fit(X_train, y_train)

y_predict = classifier.predict(X_test)


# Distance de Levenhstein
# Essay 2


def lev_dist(data1, data2):
    if data1 == data2:
        return 0

    # Prepare a matrix
    slen, tlen = len(data1), len(data2)
    dist = [[0 for i in range(tlen+1)] for x in range(slen+1)]
    for i in range(slen+1):
        dist[i][0] = i
    for j in range(tlen+1):
        dist[0][j] = j

    # Counting distance, here is my function
    for i in range(slen):
        for j in range(tlen):
            cout = 0 if data1[i] == data2[j] else 1
            dist[i+1][j+1] = min(
                dist[i][j+1] + 1,   # deletion
                dist[i+1][j] + 1,   # insertion
                dist[i][j] + cout   # substitution
            )
    return dist[-1][-1]


# Function Compiler
def compiler(A):
    Bo1 = False
    L1 = []
    Bo2 = False
    L2 = []
    Bo3 = False
    L3 = []
    Bo4 = False
    L4 = []
    Bo5 = False
    L5 = []
    Bo6 = False
    L6 = []
    Bo7 = False
    L7 = []
    Bo11 = False
    L11 = []
    Bo13 = False
    L13 = []
    # ----------------------Ref--------------------------------|
    for i in range(len(dataset)):
        if(dataset.iloc[i, 1] == A[0]):
            a0 = dataset.iloc[i, 2]
            Bo1 = True
    if(Bo1 == False):
        for i in range(len(dataset)):
            L1.append(lev_dist(A[0], dataset.iloc[i, 1]))
        for i in range(len(dataset)):
            if(L1[i] == min(L1)):
                a0 = dataset.iloc[i, 2]
    # -------------------------Code_Arrondi-------------------------------|
    for i in range(len(dataset)):
        if(dataset.iloc[i, 3] == A[1]):
            a1 = dataset.iloc[i, 4]
            bo2 = True
    if(Bo2 == False):
        for i in range(len(dataset)):
            L2.append(lev_dist(A[1], dataset.iloc[i, 3]))
        for i in range(len(dataset)):
            if(L2[i] == min(L2)):
                a1 = dataset.iloc[i, 4]
    # --------------------------------------QualiteMO----------------------|
    for i in range(len(dataset)):
        if(dataset.iloc[i, 6] == A[2]):
            a2 = dataset.iloc[i, 7]
            bo3 = True
    if(Bo3 == False):
        for i in range(len(dataset)):
            L3.append(lev_dist(A[2], dataset.iloc[i, 6]))
        for i in range(len(dataset)):
            if(L3[i] == min(L3)):
                a2 = dataset.iloc[i, 7]

    # -------------------------Cat_Projet------------------------------|

    for i in range(len(dataset)):
        if(dataset.iloc[i, 8] == A[3]):
            a3 = dataset.iloc[i, 9]
            Bo4 = True
    if(Bo4 == False):
        for i in range(len(dataset)):
            L4.append(lev_dist(A[3], dataset.iloc[i, 8]))
        for i in range(len(dataset)):
            if(L4[i] == min(L4)):
                a3 = dataset.iloc[i, 9]
    # -------------------Type_Projet--------------------------------|
    for i in range(len(dataset)):
        if(dataset.iloc[i, 10] == A[4]):
            a4 = dataset.iloc[i, 11]
            Bo5 = True
    if(Bo5 == False):
        for i in range(len(dataset)):
            L5.append(lev_dist(A[4], dataset.iloc[i, 10]))
        for i in range(len(dataset)):
            if(L5[i] == min(L5)):
                a4 = dataset.iloc[i, 11]

     # -------------Type_Travail----------------------------------|

    for i in range(len(dataset)):
        if(dataset.iloc[i, 12] == A[5]):
            a5 = dataset.iloc[i, 13]
            Bo6 = True
    if(Bo6 == False):
        for i in range(len(dataset)):
            L6.append(lev_dist(A[5], dataset.iloc[i, 12]))
        for i in range(len(dataset)):
            if(L6[i] == min(L6)):
                a5 = dataset.iloc[i, 13]
       # ---------------Niveau_Construction------------------------------------|

    for i in range(len(dataset)):
        if(dataset.iloc[i, 14] == A[6]):
            a6 = dataset.iloc[i, 15]
            Bo7 = True
    if(Bo7 == False):
        for i in range(len(dataset)):
            L7.append(lev_dist(A[6], dataset.iloc[i, 14]))
        for i in range(len(dataset)):
            if(L7[i] == min(L7)):
                a6 = dataset.iloc[i, 13]
    # ----------------------20'Situation'21-------------------------------------|
    for i in range(len(dataset)):
        if(dataset.iloc[i, 20] == A[11]):
            a11 = dataset.iloc[i, 21]
            Bo11 = True
    if(Bo11 == False):
        for i in range(len(dataset)):
            L11.append(lev_dist(A[11], dataset.iloc[i, 20]))
        for i in range(len(dataset)):
            if(L11[i] == min(L11)):
                a11 = dataset.iloc[i, 21]
    # --------------------------23'Statut_Dossier'24---------------------------------|
    for i in range(len(dataset)):
        if(dataset.iloc[i, 23] == A[13]):
            a13 = dataset.iloc[i, 24]
            Bo13 = True
    if(Bo13 == False):
        for i in range(len(dataset)):
            L13.append(lev_dist(A[13], dataset.iloc[i, 23]))
        for i in range(len(dataset)):
            if(L13[i] == min(L13)):
                a13 = dataset.iloc[i, 24]

    K = [int(a0), int(a1), int(a2), int(a3), int(a4), int(a5), int(a6), int(
        A[7]), int(A[8]), int(A[9]), int(A[10]), int(a11), int(A[12]), int(a13)]
    return K


#####################################---Elimination Redondances----#


def tokenize(doc): return doc.lower().split(" ")


def jacanda(L, T):
    a = len(set(set(tokenize(L))).intersection(set(tokenize(T))))
    b = len(set(set(tokenize(L))).union(set(tokenize(T))))
    Jacand = a/b
    return Jacand


def Elimination(L):
    LISTEA = []
    Bo1 = False
    Bo2 = False
    Bo3 = False
    Bo4 = False
    Bo5 = False
    Bo6 = False
    Liste0 = [L[0]]
    for i in range(len(L)):
        if(jacanda(L[0], L[i]) < 0.5):
            Liste0.append(L[i])

    Liste1 = []
    if(len(Liste0) > 3):
        Bo1 = True
        Liste1.append(Liste0[0])
        Liste1.append(Liste0[1])
        for i in range(2, len(Liste0)):
            if(jacanda(Liste0[1], Liste0[i]) < 0.3):
                Liste1.append(Liste0[i])
    Liste2 = []
    if(len(Liste1) > 4):
        Bo2 = True
        Liste2.append(Liste1[0])
        Liste2.append(Liste1[1])
        Liste2.append(Liste1[2])
        for i in range(3, len(Liste1)):
            if(jacanda(Liste1[2], Liste1[i]) < 0.3):
                Liste2.append(Liste1[i])
    Liste3 = []
    if(len(Liste2) > 5):
        Bo3 = True
        Liste3.append(Liste2[0])
        Liste3.append(Liste2[1])
        Liste3.append(Liste2[2])
        Liste3.append(Liste2[3])
        for i in range(4, len(Liste2)):
            if(jacanda(Liste2[2], Liste2[i]) < 0.3):
                Liste3.append(Liste2[i])
    Liste4 = []
    if(len(Liste3) > 6):
        Bo4 = True
        Liste4.append(Liste3[0])
        Liste4.append(Liste3[1])
        Liste4.append(Liste3[2])
        Liste4.append(Liste3[3])
        Liste4.append(Liste3[4])
        for i in range(5, len(Liste3)):
            if(jacanda(Liste3[2], Liste3[i]) < 0.3):
                Liste4.append(Liste3[i])
    Liste5 = []
    if(len(Liste4) > 7):
        Bo5 = True
        Liste5.append(Liste4[0])
        Liste5.append(Liste4[1])
        Liste5.append(Liste4[2])
        Liste5.append(Liste4[3])
        Liste5.append(Liste4[4])
        Liste5.append(Liste4[5])
        for i in range(6, len(Liste4)):
            if(jacanda(Liste4[2], Liste4[i]) < 0.3):
                Liste5.append(Liste4[i])
    Liste6 = []
    if(len(Liste5) > 8):
        Bo6 = True
        Liste6.append(Liste5[0])
        Liste6.append(Liste5[1])
        Liste6.append(Liste5[2])
        Liste6.append(Liste5[3])
        Liste6.append(Liste5[4])
        Liste6.append(Liste5[5])
        for i in range(7, len(Liste6)):
            if(jacanda(Liste5[2], Liste5[i]) < 0.3):
                Liste6.append(Liste5[i])
    if(Bo1 == False and Bo2 == False and Bo3 == False and Bo4 == False and Bo5 == False and Bo6 == False):
        LISTEA = Liste0
    if(Bo1 == True and Bo2 == False and Bo3 == False and Bo4 == False and Bo5 == False and Bo6 == False):
        LISTEA = Liste1
    if(Bo1 == True and Bo2 == True and Bo3 == False and Bo4 == False and Bo5 == False and Bo6 == False):
        LISTEA = Liste2
    if(Bo1 == True and Bo2 == True and Bo3 == True and Bo4 == False and Bo5 == False and Bo6 == False):
        LISTEA = Liste3
    if(Bo1 == True and Bo2 == True and Bo3 == True and Bo4 == True and Bo5 == False and Bo6 == False):
        LISTEA = Liste4
    if(Bo1 == True and Bo2 == True and Bo3 == True and Bo4 == True and Bo5 == True and Bo6 == False):
        LISTEA = Liste5
    if(Bo1 == True and Bo2 == True and Bo3 == True and Bo4 == True and Bo5 == True and Bo6 == True):
        LISTEA = Liste6

    return LISTEA
# Fonction de lister les remarques


def listing(A):
    Liste = []
    print(0)
    for i in range(len(dataset)):
        if (A[0][0] == dataset.iloc[i, 2] and A[0][1] == dataset.iloc[i, 4]
            and A[0][2] == dataset.iloc[i, 7] and A[0][3] == dataset.iloc[i, 9]
            and A[0][4] == dataset.iloc[i, 11] and A[0][5] == dataset.iloc[i, 13]
            and A[0][6] == dataset.iloc[i, 15] and A[0][7] == dataset.iloc[i, 16]
            and A[0][8] == dataset.iloc[i, 17] and A[0][9] == dataset.iloc[i, 18]
            and A[0][10] == dataset.iloc[i, 19] and A[0][11] == dataset.iloc[i, 21]
                and A[0][12] == dataset.iloc[i, 22] and A[0][13] == dataset.iloc[i, 24]):
            Liste.append(dataset.iloc[i, 27])
    if (len(Liste) == 0):
        for i in range(12):
            r = random.choices(population=dataset.iloc[:, 27], k=1)
            str1 = ''.join(r)
            Liste.append(str1)

    return Liste
# Convert String into list


def Convert(string):
    li = list(string.split("\n"))
    return li


def Converting(Liste):
    Lisz = []
    for i in range(len(Liste)):
        Lisz.append(Convert(Liste[i]))
    Lisz1 = []
    for i in range(len(Lisz)):
        for j in range(len(Lisz[i])):
            Lisz1.append(Lisz[i][j])
    Liste1 = Elimination(Lisz1)
    return Liste1
################################################


def predict(data):
    A = compiler(data)
    A = np.array(A).reshape(1, -1)
    A = A.reshape(1, -1)
    Liste = listing(A)
    print(A)
    Liste = Elimination(Liste)
    Liste1 = Converting(Liste)
    return Liste1


def Consulter(A):
    L = []
    L1 = []
    BO = False
    for i in range(len(dataset)):
        if (int(dataset.iloc[i, 0]) == int(A[0]) and BO == False):
            BO = True
            for j in range(1, len(dataset.iloc[i, :])):
                L.append(dataset.iloc[i, j])
            #df = dataset.iloc[i,[1,3,5,6,8,10,12,14,16,17,18,19,20,22,23]]
    for i in range(len(L)):
        if(i == 0):
            L1.append("Référence du dossier est:"+str(L[i]))
        if(i == 2):
            L1.append("Code D'arrondissement est:"+str(L[i]))
        if(i == 4):
            L1.append("Data du Créatio du dossier est:"+str(L[i]))
        if(i == 5):
            L1.append("Qualité du Maître d'ouvrage est:"+str(L[i]))
        if(i == 7):
            L1.append("catégorie du projet est:"+str(L[i]))
        if(i == 9):
            L1.append("Type du projet est:"+str(L[i]))
        if(i == 11):
            L1.append("Type du Travail est:"+str(L[i]))
        if(i == 13):
            L1.append("Niveau de construction est:"+str(L[i]))
        if(i == 15):
            L1.append("surface du terrain est:"+str(L[i]))
        if(i == 16):
            L1.append("Cout du Projet est:"+str(L[i]))
        if(i == 17):
            L1.append("Le nombre du rejet du dossier est:"+str(L[i]))
        if(i == 18):
            L1.append(
                "Nombre de fois le dossier est en mise à jour est:"+str(L[i]))
    #str1 = '\n'.join(map(str, L1))
    #T = df.to_json(orient='index')
    return L1


flask_app = Flask(__name__)
app = Api(app=flask_app,
          version="1.0",
          title="Simulator",
          description="Prediction des Remarque utilisant modèle d'entrainement ")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params',
                  {'Ref': fields.String(required=True,
                                        description="Ref",
                                        help="Text Field 1 cannot be blank"),
                   'Code_Arrondi': fields.String(required=True,
                                                 description="Code_Arrondi",
                                                 help="Text Field 2 cannot be blank"),
                   'QualiteMO': fields.String(required=True,
                                              description="QualiteMO",
                                              help="Text Field 2 cannot be blank"),
                   'Cat_Projet': fields.String(required=True,
                                               description="Cat_Projet",
                                               help="Select 1 cannot be blank"),
                   'Type_Projet': fields.String(required=True,
                                                description="Type_Projet",
                                                help="Select 1 cannot be blank"),
                   'Type_Travail': fields.String(required=True,
                                                 description="Type_Travail",
                                                 help="Select 2 cannot be blank"),
                   'Niveau_Construction': fields.String(required=True,
                                                        description="Niveau_Construction",
                                                        help="Select 2 cannot be blank"),
                   'SurfaceTerrain': fields.Float(required=True,
                                                  description="SurfaceTerrain",
                                                  help="Select 2 cannot be blank"),
                   'Cout': fields.Float(required=True,
                                        description="Cout",
                                        help="Select 2 cannot be blank"),
                   'NbrRejet': fields.Float(required=True,
                                            description="NbrRejet",
                                            help="Select 2 cannot be blank"),
                   'MiseAjourDossier': fields.Float(required=True,
                                                    description="MiseAjourDossier",
                                                    help="Select 2 cannot be blank"),
                   'Situation': fields.String(required=True,
                                              description="Situation",
                                              help="Select 2 cannot be blank"),
                   'StepDossier': fields.Float(required=True,
                                               description="StepDossier",
                                               help="Select 2 cannot be blank"),
                   'Statut_Dossier': fields.String(required=True,
                                                   description="Statut_Dossier",
                                                   help="Select 2 cannot be blank"),
                   })


@name_space.route("/")
class MainClass(Resource):

    def options(self):
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

    @app.expect(model)
    def post(self):
        try:
            formData = request.json
            data = [val for val in formData.values()]
            prediction = predict(data)
            response = jsonify({
                "statusCode": 200,
                "status": "Prediction made",
                "result": prediction
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except Exception as error:
            return jsonify({
                "statusCode": 500,
                "status": "Could not make prediction",
                "error": str(error)
            })


# ----------------------------------------------------------------------------------
print("omar")
name_space1 = app.namespace('consulter', description='consulter APIs')

model1 = app.model('consulter params',
                   {'id': fields.Float(required=True,
                                       description="ID",
                                       help="Text Field 1 cannot be blank"),
                    })


@name_space1.route("/")
class MainClass(Resource):

    def options(self):
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

    @app.expect(model1)
    def post(self):
        try:
            formData = request.json
            data1 = [val for val in formData.values()]
            print(data1[0])
            prediction = Consulter(data1)
            print("live")
            print(prediction)
            response = jsonify({
                "statusCode": 200,
                "status": "Consultation",
                "result": prediction
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except Exception as error:
            return jsonify({
                "statusCode": 500,
                "status": "Could not make Consultation",
                "error": str(error)
            })
