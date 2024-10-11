// Importa o Gulp e o plugin para compilar Sass, utilizando o compilador Dart Sass.
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

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

// Função watch para monitorar mudanças nos arquivos .scss e recompilar automaticamente.
exports.default = function(){
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass)); 
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series( comprimeJavaScript)); 
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens)); 
    // Observa arquivos .scss no diretório ./source/styles e roda compilaSass automaticamente quando há mudanças.
}