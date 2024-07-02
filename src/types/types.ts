import React from "react"

export type Coordenadas = {
    lat: number,
    long: number
}

export type CoordenadasState = [
    Coordenadas,
    React.Dispatch<React.SetStateAction<Coordenadas>>
]

export type PainelData = {
        ipaddress : string,
        local : string,
        timezone : string,
        isp : string
}

export type PainelDataState = [
    PainelData,
    React.Dispatch<React.SetStateAction<PainelData>>
]