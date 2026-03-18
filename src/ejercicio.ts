
/**
 * Clase que almacena internamente un mapa de pares clave-valor
 */
export class AppConfig {

    private static instance: AppConfig;
    private map1: Map<string, string>;

    /**
     * Constructor de la clase
     */
    private constructor(){
        this.map1 = new Map<string, string>();
    }


    /**
     * Funion que comprueba la instancia de una clase 
     * clear
     * @returns la instancia de la clase
     */
    public static getInstance(): AppConfig{
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }


    /**
     * Funcion que establece la clave y valor del mapa 
     * 
     * @param key clave
     * @param value valor
     */
    public set(key: string, value: string): void {
        this.map1.set(key, value);
    }


    /**
     * Funcion que obtiene el valor de un mapa dada una clave
     * @param key clave
     * @returns valor del mapa dada la clave
     */
    public get(key: string): string | undefined {
        return this.map1.get(key);
    }


    /**
     * Funcion que devuelve la copia del mapa
     * 
     * @returns copia del mapaa
     */
    public getAll(): Map<string, string> {
        return new Map(this.map1);
    }

   
    /**
     * FUncion para eliminar el contenido de un mapa dada unas condiciones
     */
    public reset(): void {

        //if clave = env y value = test, borrarrrr
        this.map1.clear();
    
    }
}

    }
