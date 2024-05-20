plugins {
    kotlin("jvm") version "1.8.0"
    application
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

val springBootVersion = "2.7.0"
val jacksonModuleKotlinVersion = "2.13.1"
val seleniumVersion = "3.141.59"
val junitJupiterVersion = "5.6.0"


dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web:$springBootVersion")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:$jacksonModuleKotlinVersion")
    implementation("org.seleniumhq.selenium:selenium-java:$seleniumVersion")
    implementation("org.seleniumhq.selenium:selenium-chrome-driver:$seleniumVersion")
    testImplementation("org.junit.jupiter:junit-jupiter:$junitJupiterVersion")
}

kotlin {
    // Usunięcie zbędnego ustawienia wersji JVM
    // jvmToolchain(11)
}

application {
    mainClass.set("MainKt")
}

