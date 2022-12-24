handlePageHide() {
      this.booms = []
      this.running = false
      // 简单修改，清理停留不动的烟火特效
      this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
      this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
    }