// Importa o Gulp e o plugin para compilar Sass, utilizando o compilador Dart Sass.
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Importa o plugin para gerar sourcemaps.
const sourcemaps = require('gulp-sourcemaps');

// Função para compilar o Sass, gerar sourcemaps e salvar os arquivos compilados.
function compilaSass(){
    return gulp.src('./source/styles/main.scss') // Localiza o arquivo .scss de origem.
        .pipe(sourcemaps.init()) // Inicia a captura dos sourcemaps (para mapear o CSS gerado com o Sass).
        .pipe(sass({ outputStyle: 'compressed' })) // Compila o Sass com estilo comprimido.
        .pipe(sourcemaps.write('./maps')) // Escreve os sourcemaps em um diretório chamado 'maps'.
        .pipe(gulp.dest('./build/styles')); // Salva o CSS compilado no diretório de destino.
}

// Função para simular uma tarefa com um delay de 2 segundos.
function funcaoPadrao(callback){
    setTimeout(function() {
        console.log('Execultando via Gulp');
        callback(); // Chama o callback para informar ao Gulp que a tarefa terminou.
    }, 2000);
}

// Função que imprime uma mensagem e chama outra função para imprimir "Tchau Gulp".
function dizOi(callback){
    setTimeout(function(){
        console.log('Olá Gulp');
        dizTchau(); // Chama a função dizTchau.
        callback(); // Indica ao Gulp que a tarefa foi concluída.
    }, 1000);
}

// Função que imprime "Tchau Gulp".
function dizTchau() {
    console.log('Tchau Gulp');
}

// Define a função padrão para ser executada com a tarefa padrão do Gulp.
// exports.default = gulp.parallel(funcaoPadrao, dizOi); // Executa funcaoPadrao e dizOi em paralelo.

// Exporta a função dizOi para ser chamada separadamente, se necessário.
// exports.dizOi = dizOi;

// Exporta a função compilaSass para compilar o Sass.
exports.sass = compilaSass;

// Função watch para monitorar mudanças nos arquivos .scss e recompilar automaticamente.
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass)); 
    // Observa arquivos .scss no diretório ./source/styles e roda compilaSass automaticamente quando há mudanças.
}
